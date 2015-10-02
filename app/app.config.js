define(['app', 'app-routes'], function (app) {
    'use strict';
    
    //This should probably call app.routes
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'states/main/index.html',
                controller: 'appController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'states/home/index.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'states/about/index.html'
            });
            
    });
    
    console.log('app.config is called.');
});
