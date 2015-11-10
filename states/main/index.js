require.config({
   paths: {
       'main': './states/main/index',
       'tout': './js/modules/tout-directive/index'
   } 
});

define(['app', 'main', 'tout'], function (app) {
    'use strict';
    
    console.log('From main/index.js');
    
    app.registerController('mainController', ['$scope', function ($scope) {
        //Main Page controller
        this.data = {
            hello: 'Hello from the New object litteral',
            other: 'The other message from the object litteral From MAIN CTRL'
        };
        console.log('value of this:', this.data);
    }]);
});
