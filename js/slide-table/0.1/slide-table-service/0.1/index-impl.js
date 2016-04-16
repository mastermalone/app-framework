

define(function () {
  'use strict';
  
  return function SlideTableFactory (http, httpService) {
    var _this = this;
        
    function getData(url, scope, callback) {
      //Injected service, httpService called
      httpService.options.getData(url, scope, callback);
      console.log("HTTP OPTIONS: ", httpService.options);
    }
    
    function sildeTable() {
      
    }
    
    return {
      getData: getData,
      sildeTable: sildeTable
    };
  };
}); 