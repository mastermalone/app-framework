require.config({
    paths: {
        'app': '../app/app',
        'main': '../states/main/index'
    }
});

require(['app', 'main'], function (app) {
    console.log('loading main page');
});
