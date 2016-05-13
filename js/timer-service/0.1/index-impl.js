define(function () {
	'use strict';
	
	return function TimerFactory(eventService) {
		
		function TimerService(interval) {
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
				console.log('TIMER SERVICE', this, interval);
				TimerService.prototype.callback = callback;
				TimerService.prototype.tmr = setInterval(this.triggerExternalHandler, interval);
				//TimerService.prototype.tmr = setInterval('this.callback()', interval);
				
				TimerService.prototype.eventService = eventService;
			},
			triggerExternalHandler: function (event) {		
				TimerService.prototype.timeout(function() {
		      angular.element(TimerService.prototype.elmID).triggerHandler('click');
		    }, 0);
			},
			clearTimer: function () {
				console.log('ATTEMPTING TO CLEAR', this);
				clearInterval(TimerService.prototype.tmr);
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
