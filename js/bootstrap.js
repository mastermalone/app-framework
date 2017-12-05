require.config({
    paths: {
        'app': '../app/app',
        'auto': './js/auto-complete/index',
        's-pannel': './js/side-pannel/0.1/index',
        'slide-table': './js/slide-table/0.1/index',
        'slider': './js/slider/0.1/index',
        'app-audio': './js/app-audio/0.1/index',
        /*'slide-table-service': './js/slide-table/0.1/slide-table-service/0.1/index',*/
        'slider-service': './js/slider/0.1/slider-service/0.1/index',
        'css-transition-service': './js/css-transition-service/0.1/index',
        'test-directive': './js/test-directive/0.1/index',
        'wave': './js/wave/0.1/index',
        'wave-service': './js/wave/0.1/wave-service/0.1/index',
        'wavesurfer': './lib/wavesurfer/wavesurfer.min',
        'wavesurfer-timeline': './lib/wavesurfer/plugin/wavesurfer.timeline.min',
        'js-algo': './js/js_algo/0.1/index',
        'js-algo-service': './js/js_algo/0.1/js_algo_service/0.1/index',
        'linked-list-service': './js/linked-list-service/0.1/index',
        'peaks': './node_modules/peaks.js/peaks',
        'contact-list': './js/contact-list/0.1/index',
        'sound-wave': './js/sound_wave/0.1/index',
        'sound-wave-service': './js/sound_wave/0.1/sound_wave_service/0.1/index'
    },
    shim: {
      'wavesurfer': {
        exports: 'wavesurfer',
      },
      'wavesurfer-timeline': {
        deps: ['wavesurfer'],
        exports: 'wavesurfer-timeline'
      }
    }
});

require([
  'app',
  'auto',
  's-pannel',
  'slide-table',
  'slider',
  'app-audio',
  /*'slide-table-service',*/
  'slider-service',
  'css-transition-service',
  'test-directive',
  'wave',
  'wave-service',
  'wavesurfer',
  'wavesurfer-timeline',
  'js-algo',
  'js-algo-service',
  'linked-list-service', 
  'contact-list',
  'peaks',
  'sound-wave',
  'sound-wave-service']);
