require.config({
    urlArgs: 'bust='+(new Date().getTime()),
    baseUrl: '/',
    paths: {
        'angular': 'lib/angular.min',
        'ui-router': 'lib/angular-ui-router.min',
        'couch-potato': 'lib/couch-potato.min',
        'app': 'app/app'
    },
    shims: {
        'angular': {
            exports: 'angular'
        },
        'couch=potato': {
            deps: 'angular',
            exports: 'couch-potato'
        },
        'ui-router': {
            deps: 'angular',
            exports: 'angular-ui-router'
        }
    }
});

require(['app'], function (app) {
    app.init();
});
