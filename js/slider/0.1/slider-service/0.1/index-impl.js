define(function () {
  'use strict';
  
  return function SliderFactory(http, httpService) {
    //Expose httpService methods via these wrappers
    
    /*
     * @param {String} url
     * @param {Object} scope
     * @param {String} storageID
     * @param {function} callback
     */
    function getData(url, scope, storageID, callback) {
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
