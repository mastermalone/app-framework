
require.config({
    baseUrl: './',
    paths: {
        'bootstrap': 'app/app.bootstrap',
        'projectBootstrap': 'js/bootstrap',
        'text': 'lib/text'
    }
});
console.log('Main is loading:  Loaded 1st');
require(['bootstrap', 'projectBootstrap', 'text'], function () {
   //init app 
});