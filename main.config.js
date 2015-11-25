
require.config({
    baseUrl: './',
    paths: {
        'app': 'app/app',
        'bootstrap': 'app/app.bootstrap',
        'projectBootstrap': 'js/bootstrap'
    }
});

require(['bootstrap', 'projectBootstrap'], function () {
   //init app 
});