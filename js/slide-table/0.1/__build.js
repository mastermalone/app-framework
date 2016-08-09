

({
  baseUrl: './',
  name: 'slide-table',
  out: 'index.min.js',
  useStrict: true,
  wrap: true,
  allowSourceOverwrites: false,
  preserveLicenseComments:false,
  generateSourceMaps: true,
  paths: {
    'slide-table': 'index',
    'slide-table-service': 'slide-table-service/0.1/index',
    'slide-table-service': 'slide-table-service/0.1/index-impl',
    'emitter': 'empty:',
    'app': 'empty:',
    'text': 'empty:',
    'emitter': 'empty:',
    'event-service': 'empty:'
  },
  exclude: [
    'text',
    'app',
    'emitter',
    'event-service'
  ]
});  