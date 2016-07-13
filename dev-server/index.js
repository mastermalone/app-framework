module.exports.server = (function () {
    'use strict';
    
    var Server = {
        init: function (domain, port) {
          const https = require('https');
          const fs = require('fs');
          const proxied = require('https-proxied');
          
          var portX = port || 3000;
          var domainX = domain || 'localhost';
          var connect = require('connect');
          var svStatic = require('serve-static');
          var vhost = require('vhost');
          var path = require('path');
          var pem = require('pem');
          var serve = svStatic('./');
          var liverelaod = require('livereload');
          
          //this is for the site
          var siteApp = connect();
          //This is the main server used for routing
          var mainApp = connect(); 
          
          siteApp.use(svStatic('./', {index:['index.html']}));
          mainApp.use(vhost(domainX, siteApp));
          
          //app.use(vhost('member.localhost.cn', siteApp));
          mainApp.listen(portX);
          
          mainApp = liverelaod.createServer();
          mainApp.watch([path.resolve(__dirname + "/../js"), path.resolve(__dirname + "/../states"), path.resolve(__dirname + "/../webservicemocks")]);
          console.log("Server is listening on port:", port);
          
          //HTTPS Server on 3002
          pem.createCertificate({
            days: 1,
            selfSigned: true
          }, function (err, keys) {
            var secureApp = https.createServer({
              key: keys.serviceKey,
              cert: keys.certificate
            }, vhost(domainX, siteApp));
            console.log(Object.keys(keys));
            secureApp.listen(portX+1);
            console.log('HTTP is running on ', portX+1);
          });
        }
    };
    
    return Server;
}());
