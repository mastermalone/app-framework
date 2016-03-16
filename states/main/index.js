require.config({
    paths: {
        'app': './app/app',
        'tout': './js/modules/tout-directive/index',
        'get-state-service': './js/get-state-service/index',
        'auto': './js/auto-complete/index',
        'promise-factory': './js/promise-service/index' 
    } 
});

define(['app', 'get-state-service', 'promise-factory', 'tout', 'auto'], function (app, getState, promiseFactory) {
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
            promiseFactory.init({removeSrc: 'some value'});
        };
        
        $scope.hello = "This is BS";
        this.data = {
            hello: 'Hello from the New object litteral',
            other: 'The other message from the object litteral From MAIN CTRL'
        };
        console.log('value of this:', this.data);
    }]);
});
