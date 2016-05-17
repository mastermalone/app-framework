define(function () {
    'use strict';
    
    return function GetStateService (toState) {
      
      function getState (state) {
        
        return state;
      }
      console.log('Obtaining state value', getState);
      return {
          getstate: getState
      };
    };
    
    //console.log('State to return', Getstate.currentState);
    //return GetState;
});
