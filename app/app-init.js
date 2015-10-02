//Loads up app
define(['app', 'app-config'], function (app) {
   'use strict';
   
    app.run(['$couchPotato', function ($couchPotato) {
        app.lazy = $couchPotato;
        console.log('LAZY', app.lazy);
    }]);
    
    console.log('Preparing to initialize', app);
});
