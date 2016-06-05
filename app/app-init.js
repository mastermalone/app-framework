
//Loads up app
define(['app', 'app-config'], function (app) {
   'use strict';
    //Gets the app running with all the dependencies in place
    app.run(['$couchPotato', '$rootScope', '$state', '$stateParams', function ($couchPotato, $rootScope, $state, $stateParams) {
        $rootScope.state = $state;
        $rootScope.stateParames = $stateParams;
        app.lazy = $couchPotato;
        
        console.log('Value opf $stateParams:oads 7th', $stateParams);

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.toState = toState;
            var currentState = $rootScope.toState.name;
            console.log('Loads 9th', $rootScope.toState.name);
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
