require.config({
	paths: {
		'timer-service-impl': './js/timer-service/0.1/index-impl'
	}
});

define(['app', 'timer-service-impl'], function (app, timerServiceImpl) {
	'use strict';
	app.registerFactory('timerService', ['eventService', timerServiceImpl]);
});
