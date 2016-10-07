define(['app', 'state-routes', 'app-routes'], function (app, stateRoutes) {
    'use strict';
    
    //This should probably call app.routes
  app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/main');
    
    console.log('app-config load order', stateRoutes);
    
    for (var i = 0; i < stateRoutes.state.length; i++) {
      console.log('stateRoutes:', stateRoutes.state[i].name);
    
      $stateProvider.state(stateRoutes.state[i].name, {
        url: stateRoutes.state[i].url,
        templateUrl: stateRoutes.state[i].templateUrl
      });
    }
  });    
});
