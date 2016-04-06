

define(function () {
  'use strict';
  console.log('LOADING HTTP SERVICE');
  
  return function HTTPFactory(http, url, callback) {
     var options = {
       
      stored: {},
      getData : function (url, scope, callback) {
        var _this = this;
        var message;
        
        http({
          method: 'GET',
          url: url
        }).then(function successfulHTTP(response) {    
          _this.stored =  response.data.payload;    
          if (typeof callback === 'function') {callback(response.data);};
        }, function erroneusHTTP(response) {
          message = response;
        });
      }
    };
    
    return {
      options: options
    };
  };
});
