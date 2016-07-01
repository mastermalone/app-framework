define([], function () {
  'use strict';
  
  
  return function ServiceWorkerFactory() {
    var ServiceWorker = {
      init: function init() {
        console.log('Service Worker is running');
      }
    };
    
    return {
      init: ServiceWorker.init
    };
  };
});
