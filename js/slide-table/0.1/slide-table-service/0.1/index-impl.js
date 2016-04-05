
define(function () {
  'use strict';
  
  return function SlideTableFactory (http) {
    var _this = this;
    
    function getData(url, scope, callback) {
      var message;
      
      http({
        method: 'GET',
        url: url
      }).then(function successfulHTTP(response) {        
        if (typeof callback === 'function') {callback(response.data);};
      }, function erroneusHTTP(response) {
        message = response;
      });
    }
    
    function sildeTable() {
      
    }
    
    return {
      getData: getData,
      sildeTable: sildeTable
    };
  };
}); 