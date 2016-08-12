define(function(){
    'use strict';
    return function CSSTFactory () {
      function CSSTransition () {
        //Empty constructor
      }
      
      CSSTransition.prototype = {
          constructor: CSSTransition,
          transitionEnd: function() {
              var elm, Transitions;
              elm = document.createElement('demo');
              Transitions = {
                  'transition': 'transitionend',
                  'OTransition': 'oTransitionEnd',
                  'MozTransition': 'transitionend',
                  'WebkitTransition': 'webkitTransitionEnd'
              };
              for(var trans in Transitions){
                  if(elm.style[trans] !== 'undefined'){
                      return Transitions[trans];
                  }
              }
          }
      };
      
      return new CSSTransition();
    };
});