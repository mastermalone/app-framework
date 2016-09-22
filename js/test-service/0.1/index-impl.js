define(function () {
  'use strict';
  
  return function TestFactory() {
    var TestService = {
      init: function initialize() {
        console.log('Test Service is initializing');
      }
    };
    
    return TestService;
  };
});
