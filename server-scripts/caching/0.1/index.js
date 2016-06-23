module.exports.caching = (function () {
  'use strict';
  
  var Caching = {
    init: function init() {
      var c = require('appcache-node');
/*
      var cf = new c.newCache([
        './main.config.js',
        './index.css'
      ]);*/

      
      var cf = c.newCache([
        'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
        , 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
        ]);
      
      console.log('THE APP CACHE:', c);
      
      //this.setRequestHandler(cf);
      
    },
    setRequestHandler: function setRequestHandler (cf) {
      if (r.url.match(/app\.cache$/)) {
        s.writeHead(200, {'Content-Type': 'text/cache-manifest'});
        return s.end(cf);
      }
    }
  };
  
  return Caching;
}());
