define([], function () {
  'use strict';
  
  
  return function ServiceWorkerFactory() {
    var ServiceWorker = {
      init: function init() {
        
        this.setLocalStorageKeyToEnagbleServiceWorker();
        this.enableServiceWorker();
        console.log('Service Worker is running',  this.enableServiceWorker());
        //this.register();
      },
      register: function register() {
        if ('serviceWorker' in navigator) {
          console.log('WE HAVE SERVICE WORKERS');
          //Must include the full host name for local host 127.0.0.1/
          console.log('Hostname ', window.location.hostname);
          //navigator.serviceWorker.register('/service-worker/0.1/index.js').then(function (reg) {
          navigator.serviceWorker.register('/sw.js', {'scope': './'})
          .then(function (reg) {
            console.log('Registration succeeded, Scope is ', reg.scope);
          }).catch(function (error) {
            console.log('There was an error during regsitration:', error);
          });
        }else {
          console.log('NO SERVICE WORKER AVAILBLE');
        }
      },
      setLocalStorageKeyToEnagbleServiceWorker: function setLSKeyForSW(val) {
        if (window.localStorage.hasOwnProperty('enableServiceWorker')) {
          return;
        }else {
          val = val || '';
          window.localStorage.setItem('enableServiceWorker', val);
        }
      },
      enableServiceWorker: function enable() {
        var ls = window.localStorage;
        var enable = ls.hasOwnProperty('enableServiceWorker') ? ls.enableServiceWorker : false;
        
        console.log('ENABLE SERVICE WORKER', ls.enableServiceWorker);
        return ls.enableServiceWorker;
      }
    };
    
    return {
      init: ServiceWorker.init,
      register: ServiceWorker.register,
      setLocalStorageKeyToEnagbleServiceWorker: ServiceWorker.setLocalStorageKeyToEnagbleServiceWorker,
      enableServiceWorker: ServiceWorker.enableServiceWorker,
    };
  };
});
