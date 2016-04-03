require.config({
    paths: {
        'app': './app/app',
        'tout': './js/modules/tout-directive/index',
        'get-state-service': './js/get-state-service/index',
        'auto': './js/auto-complete/index',
        'promise-factory': './js/promise-service/index',
        's-pannel': './js/side-pannel/0.1/index' 
    } 
});

define(['app', 'get-state-service', 'promise-factory', 'tout', 'auto', 's-pannel'], function (app, getState, promiseFactory) {
    'use strict';
    
    console.log('From main/index.js: loaded 3rd, since this is the main page.');
    
    
    app.registerDirective('mainDirective', [function () {
        return {
            restrict: 'AE',
            scope: {},
            controller: 'mainController',
            controllerAs: 'mainCtrl',
            bindToController: true,
            link: function (scope, element, attrs, ctrl) {
                //Add some logic here for the directive
                //the ctrl arg represents the controller if you want to use it here in the link function
                ctrl.orderMethods();
            }
        };
    }]);
    
    app.registerController('mainController', ['$scope', 'promiseFactory', function ($scope, promiseFactory) {
        //Main Page controller
        
        this.orderMethods = function () {
            promiseFactory.init(this.method1).then(this.method2);
        };
        
        this.method1 = function (resolve, reject) {
            //var frag = document.createDocumentFragment();
            //var bdy = document.getElementsByTagName('body')[0];
            console.log('Method 1');
            
            /*for (var i = 0; i < 500; i++) {
                var p = document.createElement('p');
                p.innerHTML = 'p tag: '+i;
                frag.appendChild(p);
            }
            bdy.appendChild(frag);*/
        };
        
        this.method2 = function (resolve, reject) {
            console.log('Method 2');
        };
        
        $scope.hello = "This is BS";
        this.data = {
            hello: 'Hello from the New object litteral',
            other: 'The other message from the object litteral From MAIN CTRL'
        };
        console.log('value of this:', this.data);
    }]);
});
