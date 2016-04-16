define(function () {
    'use strict';
    
    return function PromiseFactory () {
        function init(fn) {
            
            if (typeof fn === 'function') {
               
                return new Promise(function (resolve, reject)  {
                    resolve(fn());
                });
            }
        };
        return {
            init: init
        };
    };
    
});
