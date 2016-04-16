
define(['emitter'], function (emitter) {
  'use strict';
  console.log('EMITTER:', emitter.prototype);
  return function EventServiceFactory() {
    function EventService() {
      emitter.call(this);
    }
    
    EventService.prototype = Object.create(emitter.prototype);
      EventService.prototype.constructor = EventService;
      
      EventService.prototype.addListener =
      EventService.prototype.on = function (type, listener, scope) {
          emitter.prototype.on.call(this, type, listener);
          if (scope && scope.$on) {
              scope.$on('$destroy', this.off.bind(this, type, listener));
          }
      };
      
      EventService.prototype.once = function (type, listener, scope) {
          emitter.prototype.once.call(this, type, listener);
          if (scope && scope.$on) {
              scope.$on('$destroy', this.off.bind(this, type, listener));
          }
      };
      
      EventService.prototype.many = function (type, times, listener, scope) {
          emitter.prototype.many.call(this, type, times, listener);
          if (scope && scope.$on) {
              scope.$on('$destroy', this.off.bind(this, type, listener));
          }
      };
      
      return new EventService();
  };
  
});
