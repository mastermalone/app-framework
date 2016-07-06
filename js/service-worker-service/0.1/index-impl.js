define([], function () {
  'use strict';
  
  
  return function ServiceWorkerFactory() {
    var ServiceWorker = {
      init: function init() {
        console.log('Service Worker is running');
        this.register();
      },
      register: function register() {
        if ('serviceWorker' in navigator) {
          console.log('WE HAVE SERVICE WORKERS');
        }
      }
    };
    
    return {
      init: ServiceWorker.init,
      register: ServiceWorker.register
    };
  };
});
