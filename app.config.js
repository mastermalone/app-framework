require.config({
    urlArgs: 'bust='+(new Date().getTime()),
    baseUrl: '/',
    paths: {
        'angular': 'lib/angular',
        'couch-potato': 'lib/couch-potato',
        'ui-router': 'lib/angular-ui-router.min',
        'app': 'app/app',
        'app-init': 'app/app-init'
    },
    shims: {
        'angular': {
            exports: 'angular'
        },
        'couch-potato': {
            deps: ['angular'],
            exports: 'couch-potato'
        },
        'ui-router': {
            deps: 'angular',
            exports: 'ui-router'
        }
    }
});

require(['app-init'], function () {
    console.log('App config is loaded');
});
