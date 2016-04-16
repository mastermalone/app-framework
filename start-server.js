(function () {
    'use strict';
    
    var server = require('./dev-server/index').server;
    
    server.init('localhost', 3001);
    
}());

