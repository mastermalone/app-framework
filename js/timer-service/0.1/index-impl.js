define(function () {
	'use strict';
  
  var tmr = '';
  
	return function TimerFactory(eventService) {

		function TimerService(interval) {
		  var tmr = '';
			this.interval = interval;
		}

		TimerService.prototype = {
			constructor: TimerService,
			init: function (interval, evt, callback, scope, timeout, elmID) {
				TimerService.prototype.evt = evt;

				TimerService.prototype.scope = scope;
				TimerService.prototype.timeout = timeout;
				TimerService.prototype.elmID = elmID;

				TimerService.prototype.startTimer(interval, callback);
			},
			startTimer: function (interval, callback) {
				//console.log('TIMER SERVICE', this, interval);
				TimerService.prototype.callback = callback;
				tmr = setInterval(this.emitOnInterval, interval);

				TimerService.prototype.eventService = eventService;
			},
			emitOnInterval: function (event) {
				//console.log('EMITTING EVENT');				
				TimerService.prototype.timeout(function() {
		      angular.element(TimerService.prototype.elmID).triggerHandler('click');
		    }, 0);
			},
			clearTimer: function () {
				//console.log('ATTEMPTING TO CLEAR', tmr);
				clearInterval(tmr);
			}
		};

		return {
			init: TimerService.prototype.init,
			startTimer: TimerService.prototype.startTimer,
			emitOnInterval: TimerService.prototype.emitOnInterval,
			clearTimer: TimerService.prototype.clearTimer
		};
	};
});
