require.config({
    paths: {
        'app': '../app/app',
        'auto': './js/auto-complete/index',
        's-pannel': './js/side-pannel/0.1/index',
        'slide-table': './js/slide-table/0.1/index',
        'slider': './js/slider/0.1/index',
        'app-audio': './js/app-audio/0.1/index',
        'slide-table-service': './js/slide-table/0.1/slide-table-service/0.1/index',
        'slider-service': './js/slider/0.1/slider-service/0.1/index',
        'css-transition-service': './js/css-transition-service/0.1/index',
        'test-directive': './js/test-directive/0.1/index'
    }
});

require([
  'app',
  'auto',
  's-pannel',
  'slide-table',
  'slider',
  'app-audio',
  'slide-table-service',
  'slider-service',
  'css-transition-service',
  'test-directive']);
