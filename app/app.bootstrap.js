require.config({
    urlArgs: 'bust='+(new Date().getTime()),
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
        'app-audio-service': '/js/app-audio-service/0.1/index'        
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
        }
    }
});

require([
  'domready',
  'app-init', 
  'slide-table-service', 
  'emitter', 
  'event-service', 
  'http-service',
  'app-audio-service'], 
  function (domready) {
    
    domready(function(){
        angular.element(document).find('html').attr('ng-app', 'app');
        angular.bootstrap(document, ['app']);
        console.log('DOM ready, app.bootstrap: Loads 8th');
    });
});