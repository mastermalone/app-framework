//Loads up app
define(['app', 'app-config'], function (app) {
   'use strict';
    //Gets the app running with all the dependencies in place
    app.run(['$couchPotato', '$rootScope', '$state', '$stateParams', function ($couchPotato, $rootScope, $state, $stateParams) {
        $rootScope.state = $state;
        $rootScope.stateParames = $stateParams;
        app.lazy = $couchPotato;

        //console.log('LAZY Loads 7th', app.lazy);
        console.log('Value opf $stateParams:oads 7th', $stateParams);

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.toState = toState;
            var currentState = $rootScope.toState.name;

            console.log('Loads 9th', $rootScope.toState.name);
            require(['./states/'+currentState+'/index']);
        });
    }]);
});
