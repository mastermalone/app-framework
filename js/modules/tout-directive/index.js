require.config({
    paths: {
        'html': './js/modules/tout-directive/index.html'
    }
});

define(['app', 'text!html'], function (app, html) {
    'use strict';
    
    app.registerDirective('pageTout', [function (scope, element, attrs) {
        return {
            restrict: 'AE',
            scope: {
                test: '=',
                event: '@',
                name: '@'
            },
            template: html,
            link: function (scope, element, attrs) {
                console.log('The Tout directive is loading');
            }
        };
    }]);
});
