define(function () {
  'use strict';
  
  return function TestFactory() {
    var TestService = {
      init: function initialize() {
        console.log('Test Service is initializing');
      },
      moduleManager: function moduleManagerFunc() {
        var modules = {};
        
        /* @param {String} name
         * @param {Array} deps //dependencies
         * @param {Function} impl //The function passed in
         */
        function define(name, deps, impl) {
          for (var i = 0;  i < deps.length; i++) {
            deps[i] = modules[deps[i]];
          }
          
          console.log('THE IMPL IS:', impl);
          modules[name] = impl.apply(impl, deps); //recieves the deps list passed in as an argument
        }
        
        /*
         * @param {String} name
         */
        function get(name) {
          return modules[name]; //gets the object impl in reality see above for proof :)
        }
        
        return {
          define: define,
          get: get
        };
      }
    };
    
    return TestService;
  };
});

