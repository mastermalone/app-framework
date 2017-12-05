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
        controller: 'AboutController'
      },
      {
        name: 'test',
        url: '/test',
        templateUrl: 'states/test/index.html',
        controller: 'TestController'
      },
      {
        name: 'wave_test',
        url: '/wave_test',
        templateUrl: 'states/wave_test/index.html',
        controller: 'WaveTestController'
      },
      {
        name: 'js_algo',
        url: '/js_algo',
        templateUrl: 'states/js_algo/index.html',
        controller: 'jsAlgoController'
      },
      {
        name: 'sound_wave',
        url: '/sound_wave',
        templateUrl: 'states/sound_wave/index.html',
        controller: 'swController'
      }
    ]
  };
  
  return StateRoutes;
});
