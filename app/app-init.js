require.config({
    baseUrl: '/',
    paths: {
        'app': 'app/app',
        'couch-potato': 'lib/angular-couch-potato'
    } 
    
});

define(['app'], function (app) {
    console.log('Preparing to initialize');
    
        
    app.run(['$couchPotato'], function ($couchPotato) {
        app.lazy = $couchPotato;
        console.log('LAZY', app.lazy);
    });
});
