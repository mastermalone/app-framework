define(function () {
  'use strict';
  
  var tmr = '';
  var time = 0;
  return function TimerFactory() {
        
    var TimerService = {
      /*
       * @param {Number} config.interval
       * @param {String} config.eventToEmit
       * @param {object} config.callback
       * @param {String} config.targetElement
       * @param {String} config.eventToTrigger
       * 
       */
      init: function (config) {
        var _this = this;
        _this.startTimer(config.interval, config);
      },
      startTimer: function (interval, config) {
        var _this = this;
        tmr = config.targetElement ? setInterval(function startTrigger() {_this.triggerEvent(config);}, interval): setInterval(function start() {_this.returnTime(config);}, interval);
      },
      clearTimer: function () {
        clearInterval(tmr);
      },
      triggerEvent: function (config) {
        angular.element(config.targetElement).triggerHandler(config.eventToTrigger);
      },
      returnTime: function timeValue(config) {
        //Flesh this out to a full featured timer at some point
        time += 1;
        return time; 
      }
    };

    return {
      init: TimerService.init,
      startTimer: TimerService.startTimer,
      clearTimer: TimerService.clearTimer,
      triggerEvent: TimerService.triggerEvent,
      returnTime: TimerService.returnTime
    };
  };
});
