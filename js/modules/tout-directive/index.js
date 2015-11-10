require.config({
    paths: {
        //'http': 'path/to/http'
    }
});


define(['app'], function (PP) {
    'use strict';
    console.log('Value of app', app);
    
    app.registerDirective('pageTout', [function (scope, element, attrs) {
        return {
            restrict: 'AE',
            scope: {
                test: '=',
                event: '@'
            },
            templateUrl: 'index.html',
            link: function (scope, element, attrs) {
                console.log('The directive is loading');
            }
        };
    }]);
    
});
