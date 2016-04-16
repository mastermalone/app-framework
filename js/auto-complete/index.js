require.config({
    paths: {
        'txthtml': './js/auto-complete/index.html',
        'css': './js/auto-complete/index.css'
    }
});

define(['app', 'text!txthtml', 'text!css'], function (app, txthtml, txtcss) {
    'use strict';
    
    app.registerDirective('autoText', [function (scope, element, attrs) {
        //Isolate scope separates this from the parent scope of the module and allows the resuse
        //of this directive without the need to create a separate controller for each use of this directive
        return {
            restrict: 'AE',
            scope: {
                searchVal: '=',
                list: '@'
            }, 
            controller: 'autoTextController',
            controllerAs: 'atCtrl',
            bindToController: true,
            template: txthtml,
            link: function () {
                var style = document.createElement('style');
                var bdy = document.getElementsByTagName('body')[0];
                var txt = document.createTextNode(txtcss);
                style.setAttribute('type', 'text/css');
                style.setAttribute('rel', 'stylesheet');
                style.appendChild(txt);
                bdy.appendChild(style);
                
                console.log('the css:', style);
            }
        };
        
        /*return {
            restrict: 'E',
            scope: {
                name: '@',
                age: '@',
                date: '@',
                update: '=',
                tenplateType: '@'
            },
            template: function () {
                if (scope.templateType === 'chinese') {
                    return txthtmlcn;
                }
            }
        };*/
    }]);
    
    app.registerController('autoTextController',  ['$http', '$location', '$window', function ($http, $location, $window) {
        console.log('The autoTextController is loading', $location.$$search.frameless);
        this.getList = function () {
            
        };
    }]);
});
