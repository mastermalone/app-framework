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
          //Must include the full host name for local host 127.0.0.1/
          navigator.serviceWorker.register('https://localhost:3002/service-worker/0.1/index.js', {
            scope: '/'
          }).then(function (reg) {
            console.log('Registration succeeded, Scope is ', reg.scope);
          }).catch(function (error) {
            console.log('There was an error during regsitration:', error);
          });
        }
      }
    };
    
    return {
      init: ServiceWorker.init,
      register: ServiceWorker.register
    };
  };
});
