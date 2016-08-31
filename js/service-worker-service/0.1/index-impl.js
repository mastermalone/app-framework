/*
 * Use:  include the service worker as a dependency and call init with your sw.js location and the scope
 * that the service worker should control
 * serviceWorker.init({
    sw_path: '/sw.js',
    scope: './'
   });
 */

define([], function () {
  'use strict';
  
  return function ServiceWorkerFactory(promise) {
    var ServiceWorker = {
      /*
       * @param {Object} configObj : This object sets the path of the sw and it's scope.
       */
      init: function init(config) {
        var configObj = config || {sw_path: '/sw.js', scope: './'}; //Set the sw path and it's scope
        
        this.setLocalStorageKeyToEnagbleServiceWorker();
        this.enableServiceWorker();
        this.register(configObj);
        console.log('Service Worker is running');
      },
      register: function register(configObj) {
        var _this = this;
        
        if ('serviceWorker' in navigator) {
          console.log('SERVICE WORKERS AVAILABLE', configObj);
          navigator.serviceWorker.register(configObj.sw_path, {'scope': configObj.scope})
          .then(function (reg) {
            console.log('Registration succeeded, Scope is ', reg.scope);
            console.log('_this.enableServiceWorker ', _this.enableServiceWorker());
            !_this.enableServiceWorker() ? _this.unregister(reg) : null;
          }).catch(function (error) {
            console.log('There was an error during regsitration:', error);
          });
        }else {
          console.info('NO SERVICE WORKER AVAILBLE');
        }
      },
      unregister: function (reg) {
        reg.unregister()
        .then(function (booleanVal) {
          //unregister was successeful
          console.info('UNREGISTERED the SW', booleanVal);
        });
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
        var enable = ls['enableServiceWorker'] !== 'false' ? true : false;
        console.log('ENABLE SW?: ', enable);
        return enable;
      }
    };
    
    return {  
      init: ServiceWorker.init,
      register: ServiceWorker.register,
      unregister: ServiceWorker.unregister,
      setLocalStorageKeyToEnagbleServiceWorker: ServiceWorker.setLocalStorageKeyToEnagbleServiceWorker,
      enableServiceWorker: ServiceWorker.enableServiceWorker,
    };
  };
});
