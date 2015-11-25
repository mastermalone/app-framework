//Loads up app


define(['app', 'app-config'], function (app) {
   'use strict';
    //Gets the app running with all the dependencies in place
    app.run(['$couchPotato', '$rootScope', '$state', '$stateParams', function ($couchPotato, $rootScope, $state, $stateParams) {
        $rootScope.state = $state;
        $rootScope.stateParames = $stateParams;
        app.lazy = $couchPotato;
        
        console.log('LAZY', app.lazy);
        console.log('Value opf $stateParams:', $stateParams);
        
        
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.toState = toState;    
            appState = toState;        
            console.log($rootScope.toState.name);
        });
    }]);
});

var appState;