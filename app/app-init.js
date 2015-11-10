//Loads up app
define(['app', 'app-config'], function (app) {
   'use strict';
   
    app.run(['$couchPotato', '$rootScope', '$state', '$stateParams', function ($couchPotato, $rootScope, $state, $stateParams) {
        $rootScope.state = $state;
        $rootScope.stateParames = $stateParams;
        app.lazy = $couchPotato;
        console.log('LAZY', app.lazy);
        console.log('Value opf $stateParams:', $stateParams, 'Value of state:', $rootScope.state);
    }]);
    
    //console.log('Preparing to initialize', app);
});
