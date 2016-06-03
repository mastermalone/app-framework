require.config({
    baseUrl: './',
    paths: {
        'bootstrap': 'app/app.bootstrap',
        'projectBootstrap': 'js/bootstrap'
    }
});
console.log('main.config is loading:  Loaded 1st');
require(['bootstrap', 'projectBootstrap']);