require.config({
    paths: {
        'app': './app/app',
        'main': './states/main/index',
        'tout': './js/modules/tout-directive/index'
    } 
});

define(['app', 'main', 'tout'], function (app) {
    'use strict';
    
    console.log('From main/index.js');
    
    
    app.registerDirective('mainDirective', [function () {
        return {
            restrict: 'AE',
            scope: {},
            controller: 'mainController',
            controllerAs: 'mainCtrl',
            bindToController: true,
            link: function (scope, element, attrs) {
                //Add some logic here for the directive
            }
        };
    }]);
    
    app.registerController('mainController', ['$scope', function ($scope) {
        //Main Page controller
        $scope.hello = "This is BS";
        this.data = {
            hello: 'Hello from the New object litteral',
            other: 'The other message from the object litteral From MAIN CTRL'
        };
        console.log('value of this:', this.data);
    }]);
});
