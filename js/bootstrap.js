require.config({
    paths: {
        'app': '../app/app',
        //'app-config': 'app/app.config',
        'tout': './js/modules/tout-directive/index',
        'get-state-service': './js/get-state-service/index',
        'auto': './js/auto-complete/index',
        's-pannel': './js/side-pannel/0.1/index',
        'slide-table': './js/slide-table/0.1/index',
        'slider': './js/slider/0.1/index',
        'app-audio': './js/app-audio/0.1/index',
        'slide-table-service': './js/slide-table/0.1/slide-table-service/0.1/index',
        'slider-service': './js/slider/0.1/slider-service/0.1/index',
        'css-transition-service': './js/css-transition-service/0.1/index'
    }
});

require([
  'app',
  'tout',
  'auto',
  's-pannel',
  'slide-table',
  'slider',
  'app-audio',
  'slider-service',
  'css-transition-service'],
  function (app) {
    console.log('loading main page:  Loads 4th');
});
