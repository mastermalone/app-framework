require.config({
    //urlArgs: 'bust='+(new Date().getTime()),
    baseUrl: './',
    paths: {
        'angular': 'lib/angular',
        'couch-potato': 'lib/angular-couch-potato',
        'ui-router': 'lib/angular-ui-router.min',
        'app': 'app/app',
        'app-config': 'app/app.config',
        'app-init': 'app/app-init',
        'app-routes': 'app/app.routes',
        'domready': 'lib/domReady',
        'emitter': 'lib/eventemitter2',
        'event-service': '/js/event-service/0.1/index',
        'http-service': '/js/http-service/0.1/index',
        'app-audio-service': '/js/app-audio-service/0.1/index',
        'caching-service': '/js/caching-service/0.1/index',
        'text': '/lib/text',
        'serivice-worker-service': '/js/service-worker-service/0.1/index'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'couch-potato': {
            deps: ['angular'],
            exports: 'couch-potato'
        },
        'ui-router': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular']
        },
        'emitter': {
        	exports: 'emitter'
        },
        'event-service': {
          deps: ['emitter'],
          exports: 'event-service'
        },
        'http-service': {
          deps: ['caching-service'],
          exports: 'http-service'
        }
    }
});

require([
  'domready',
  'app',
  'serivice-worker-service',
  'text',
  'app-init',
  'slide-table-service',
  'emitter',
  'event-service',
  'http-service',
  'app-audio-service',
  'caching-service'],
  function (domready, app) {
    //Temporary place for ServiceWorker
    app.registerController('appController', ['serviceWorker', '$element', function (serviceWorker, $element) {
      var _this = this;
      
      _this.init = function init() {
        serviceWorker.init();
      };
            
      _this.init();
    }]);
    
    domready(function(){
        angular.element(document).find('html').attr('ng-app', 'app').attr('ng-controller', 'appController');
        angular.bootstrap(document, ['app']);
    });
});
