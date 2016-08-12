define(function () {
    'use strict';
    //This is not needed.  TODO delete this file
    return function GetStateService (toState) {
      
      function getState (state) {
        
        return state;
      }
      console.log('Obtaining state value', getState);
      return {
          getstate: getState
      };
    };
});
