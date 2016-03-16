define(function () {
    'use strict';
    
    return function PromiseFactory () {
        function init(options) {
            var resolved = 'RESOVED STRING FOR TESTS';
            
            if (typeof options !== 'object') {
                return false;
            }else {
                for (var key in options) {
                    console.log('I have a key called', key);
                }
                
                if (options.hasOwnProperty('removeSrc')) {
                    console.log('The removeSrc property is present: The value is:', options.removeSrc);
                }else {
                    console.log('MAN, I aint got SHIT!');
                }
                
                /*if (var key in options === 'removeSrc') {
                    console.log('I have the key called', key);
                }else {
                    console.log('That key does not exist');
                }*/
            }
            
            if (typeof options === 'undefined' || options) {
                console.log('Hello from RESOLVE SERVICE business as usual, not changes, attribute removed');
            }else {
                console.log('We have a value of ', options, 'So not removing the attribute');
            }
            
            
            return resolved;
        };
        
        return {
            init: init
        };
    };
    
});
