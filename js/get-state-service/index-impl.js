define(function () {
    'use strict';
    
    function GetState (toState) {
        console.log('Obtaining state value', toState);
        return {
            currentState: toState
        };
    }
    
    //console.log('State to return', Getstate.currentState);
    return GetState;
});
