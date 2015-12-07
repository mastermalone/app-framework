
require.config({
    baseUrl: './',
    paths: {
        'bootstrap': 'app/app.bootstrap',
        'projectBootstrap': 'js/bootstrap',
        'text': 'lib/text'
    }
});

require(['bootstrap', 'projectBootstrap', 'text'], function () {
   //init app 
});