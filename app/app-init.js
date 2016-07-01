
//Loads up app
define(['app', 'app-config'], function (app) {
   'use strict';
    //Gets the app running with all the dependencies in place
    
    app.run(['$couchPotato', '$rootScope', '$state', '$stateParams', function ($couchPotato, $rootScope, $state, $stateParams) {
        var stateOnLoad = window.location.hash.substring(2, window.location.hash.length);
        $rootScope.state = $state;
        $rootScope.stateParames = $stateParams;
        app.lazy = $couchPotato;
        
        require(['./states/'+stateOnLoad+'/index']);
        console.log('Value opf $stateParams:oads 7th', $stateParams,'AND STATE', stateOnLoad);

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
          var currentState = '';
          stateOnLoad = window.location.hash.substring(2, window.location.hash.length);
          $rootScope.toState = toState;
          currentState = $rootScope.toState.name;
          console.log('Loads 9th', $rootScope.toState.name);
          require(['./states/'+stateOnLoad+'/index']);
        });
                
        // $rootScope.$on('$viewContentLoaded', function (evt, viewName, viewContent, param4) {
          // stateOnLoad = window.location.hash.substring(2, window.location.hash.length);
          // console.log('viewContent', window.location.hash.substring(2, window.location.hash.length));
          // require(['./states/'+stateOnLoad+'/index']);
        // });
        
        /*$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
          console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
          console.log(event, toState, toParams, fromState, fromParams);
          var currentState = $rootScope.toState.name;

          console.log('Loads 9th', $rootScope.toState.name);
          require(['./states/'+currentState+'/index']);
          initViewController();
        });*/
    }]);
});
