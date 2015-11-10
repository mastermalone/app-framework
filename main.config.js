
require.config({
    baseUrl: './',
    paths: {
        'app': 'app/app',
        'bootstrap': 'app/app.bootstrap'
    }
});

require(['bootstrap'], function () {
   //init app 
});