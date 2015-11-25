require.config({
    paths: {
        //'http': 'path/to/http',
        //'template': 'tout-directive/index.html'
    }
});


define(['app'], function (app) {
    'use strict';
    console.log('Value of app', app);
    
    app.registerDirective('pageTout', [function (scope, element, attrs) {
        return {
            restrict: 'AE',
            scope: {
                test: '=',
                event: '@',
                name: '@'
            },
            templateUrl: './js/modules/tout-directive/index.html',
            link: function (scope, element, attrs) {
                console.log('The Tout directive is loading');
            }
        };
    }]);
    
});
