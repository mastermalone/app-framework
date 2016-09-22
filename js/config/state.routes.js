define(function () {
  'use strict';
  
  console.log('LOADING STATE ROUTES');
  var StateRoutes = {
    state: [
      {
        name: 'main',
        url: '/main',
        templateUrl: 'states/main/index.html',
        controller: 'MainController'
      },
      {
        name: 'home', 
        url: '/home',
        templateUrl: 'states/home/index.html',
        controller: 'HomeController',
      },
      {
        name: 'about',
        url: '/about',
        templateUrl: 'states/about/index.html',
        controller: 'AboutCOntroller'
      },
      {
        name: 'test',
        url: '/test',
        templateUrl: 'states/test/index.html',
        controller: 'AboutCOntroller'
      }
    ]
  };
  
  return StateRoutes;
});
