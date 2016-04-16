define(function () {
  'use strict';
  
  return function SliderFactory(http, httpService) {
    console.log('SLIDER SERVICE');
    function getData(url, scope, callback) {
      httpService.options.getData(url, scope, callback);
    }
    
    return {
      getData: getData
    };
  };
});
