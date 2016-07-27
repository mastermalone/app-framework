define(['app', 'app-routes'], function (app) {
    'use strict';
    
    //This should probably call app.routes
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/main');
        console.log('Value of stateprovider: loads 6th');
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'states/main/index.html',
                controller: 'mainPageController',
                controllerAs: 'mpc'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'states/home/index.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'states/about/index.html'
            });
        //$locationProvider.html5Mode(true);
    });
});
