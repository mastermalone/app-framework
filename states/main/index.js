require.config({
    paths: {
        'app': './app/app',
        'tout': './js/modules/tout-directive/index',
        'get-state-service': './js/get-state-service/index' 
    } 
});

define(['app', 'get-state-service', 'tout'], function (app, getState) {
    'use strict';
    
    console.log('From main/index.js: loaded 3rd, since this is the main page.', getState);
    
    
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
        //var gs = getState($rootScope);
        $scope.hello = "This is BS";
        this.data = {
            hello: 'Hello from the New object litteral',
            other: 'The other message from the object litteral From MAIN CTRL'
        };
        console.log('value of this:', this.data);
    }]);
});
