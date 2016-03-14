require.config({
    paths: {
        'txthtml': './js/auto-complete/index.html',
        'css': './js/auto-complete/index.css'
    }
});

define(['app', 'text!txthtml', 'text!css'], function (app, txthtml) {
    'use strict';
    
    app.registerDirective('autoText', [function (scope, element, attrs) {
        return {
            restrict: 'AE',
            scope: {
                searchVal: '='
            }, 
            controller: 'autoTextController',
            controllerAs: 'atCtrl',
            bindToController: true,
            template: txthtml
        };
    }]);
    
    app.registerController('autoTextController',  ['$http', function ($http) {
        console.log('The autoTextController is loading');
    }]);
});
