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
            controller: 'pageToutController',
            controllerAs: 'pgtCtrl',
            bindToController: {//BindToController allows properties from this object to be set on the controller object
                master: '@',
                user: '='  
            },
            template: html,
            link: function (scope, element, attrs) {
                console.log('The Tout directive is loading');
                console.log('Value from page tout link:');
            }
        };
    }]);
    
    app.registerController('pageToutController', [function () {
        console.log('Value of this.master:', this.master);
        this.user = 'mastermalone';
    }]);
});
