define(function () {
    'use strict';
    
    return function PromiseFactory () {
        function init(fn) {
            
            if (typeof fn === 'function') {
                // return new Promise(function (resolve, reject)  {
                    // resolve(fn());
//                     
                    // var obj = {
                        // prop0: "test",
                        // prop1: "this",
                        // prop2: "crap",
                        // prop3: "may",
                        // prop4: "work"
                    // };
//                     
                    // for (var key in obj) {
                        // console.log('The key value', obj[key]);
                    // }
                // });
                return new Promise(function (resolve, reject)  {
                    //resolve(fn());
                    
                    var obj = {
                        prop0: "test",
                        prop1: "this",
                        prop2: "crap",
                        prop3: "may",
                        prop4: "work"
                    };
                    
                    for (var key in obj) {
                        console.log('The key value', obj[key]);
                    }
                });
            }
        };
        return {
            init: init
        };
    };
    
});
