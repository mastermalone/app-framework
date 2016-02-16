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
        'domready': 'lib/domReady'        
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
        } 
    }
});

require(['domready','app-init'], function (domready) {
    
    domready(function(){
        angular.element(document).find('html').attr('ng-app', 'app');
        angular.bootstrap(document, ['app']);
        console.log('DOM ready, app.bootstrap: Loads 8th');
    });
});