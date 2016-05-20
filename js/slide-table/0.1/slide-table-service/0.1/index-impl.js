
define(function () {
  'use strict';

  return function SlideTableFactory (http, httpService) {
    var _this = this;
    //Expose httpService methods via these wrappers
    function getData(url, scope, callback) {
      //Injected service, httpService called
      httpService.options.getData(url, scope, callback);
      console.log("HTTP OPTIONS: ", httpService.options);
    }

    function setStorageID(id) {
      httpService.options.setStorageID(id);
    }

    return {
      getData: getData,
      setStorageID: setStorageID
    };
  };
});
