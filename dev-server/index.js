module.exports.server = (function () {
    'use strict';
    
    var Server = {
        init: function (domain, port) {
            var portX = port || 3000;
            var domainX = domain || 'localhost';
            
            var connect = require('connect');
            var svStatic = require('serve-static');
            var vhost = require('vhost');
            
            //this is for the site
            var siteApp = connect();
            //This is the main server used for routing
            var mainApp = connect();
            
            siteApp.use(svStatic('./', {index:['index.html']}));
            mainApp.use(vhost(domainX, siteApp));
            
            //app.use(vhost('member.localhost.cn', siteApp));
            mainApp.listen(portX);
            console.log("Server is listening on port:", port);
        }
    };
    
    return Server;
}());
