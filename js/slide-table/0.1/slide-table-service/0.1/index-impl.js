
define(function () {
  'use strict';

  return function SlideTableFactory (httpService) {
    var _this = this;
    //Expose httpService methods via these wrappers
    
    /*
     * @param {String} url
     * @param {Object} scope
     * @param {String} storageID
     * @param {function} callback
     */
    function getData(url, scope, storageID, callback) {
      //Injected service, httpService called
      httpService.options.getData(url, scope, storageID, callback);
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
