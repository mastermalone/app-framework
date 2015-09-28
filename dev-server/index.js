module.exports.server = (function () {
    'use strict';
    
    var Server = {
        init: function (port) {
            var connect = require('connect');
            var svStatic = require('serve-static');
            var vhost = require('vhost');
            
            //this is for the site
            var siteApp = connect();
            //This is the main server used for routing
            var mainApp = connect();
            
            siteApp.use(svStatic('./', {index:['index.html']}));
            mainApp.use(vhost('localhost', siteApp));
            
            //app.use(vhost('member.localhost.cn', siteApp));
            
            if (typeof port !== 'undefined') {
                mainApp.listen(port);
                console.log('Listening on port:', port);
            }else {
                return;
            }
        }
    };
    
    return Server;
}());
