require.config({
    paths: {
        'app': '../app/app',
        'main': '../states/main/index',
        'slide-table-service': './js/slide-table/0.1/slide-table-service/0.1/index',
        'slider-service': './js/slider/0.1/slider-service/0.1/index',
        'css-transition-service': './js/css-transition-service/0.1/index'
    }
});

require([
  'app', 
  'main', 
  'slider-service', 
  'css-transition-service'], 
  function (app) {
    console.log('loading main page:  Loads 4th');
});
