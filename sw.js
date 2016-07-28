var CacheVersion = {
  ver1: 'v1',
  ver2: 'v2'
};

var CacheFiles = {
  files1: [
    '/',
    '/app/app.js',
    '/app/app.config.js',
    '/app/app.routes.js',
    '/app/app-init.js',
    '/app/app.routes.js',
    '/app/app.bootstrap.js',
    '/images/beer-day.jpg',
    '/images/game-day.jpg',
    '/images/gift-day2.jpg',
    '/images/home-improvement.jpg',
    '/images/workout-buddy.jpeg',
    '/js/bootstrap.js',
    '/js/app-audio/0.1/index.js',
    '/js/app-audio-service/0.1/index.js',
    '/js/app-audio-service/0.1/index-impl.js',
    '/js/auto-complete/index.css',
    '/js/auto-complete/index.html',
    '/js/auto-complete/index.js',
    '/js/slide-table/0.1/index.js',
    '/js/slide-table/0.1/index.css',
    '/js/slide-table/0.1/index.html',
    '/js/slide-table/0.1/slide-table-service/0.1/index.js',
    '/js/slide-table/0.1/slide-table-service/0.1/index-impl.js',
    '/js/caching-service/0.1/index.js',
    '/js/caching-service/0.1/index-impl.js',
    '/js/css-transition-service/0.1/index.js',
    '/js/css-transition-service/0.1/index-impl.js',
    '/js/event-service/0.1/index.js',
    '/js/event-service/0.1/index-impl.js',
    '/js/http-service/0.1/index.js',
    '/js/http-service/0.1/index-impl.js',
    '/js/service-worker-service/0.1/index.js',
    '/js/service-worker-service/0.1/index-impl.js',
    '/js/side-pannel/0.1/index.css',
    '/js/side-pannel/0.1/index.html',
    '/js/side-pannel/0.1/index.js',
    '/js/timer-service/0.1/index.js',
    '/js/timer-service/0.1/index-impl.js',
    '/js/slider/0.1/index.html',
    '/js/slider/0.1/index.js',
    '/js/slider/0.1/index.css',
    '/js/slider/0.1/slider-service/0.1/index.js',
    '/js/slider/0.1/slider-service/0.1/index-impl.js',
    '/lib/require.js',
    '/lib/text.js',
    '/lib/angular.js',
    '/lib/domReady.js',
    '/lib/angular-couch-potato.js',
    '/lib/angular-ui-router.min.js',
    '/lib/angular.min.js',
    '/lib/eventemitter2.js',
    '/states/main/index.js',
    '/states/main/index.html',
    '/index.css',
    '/index.html',
    '/main.config.js'
  ]
};

var ServiceWorkerObj = {
  init: function init(swgs) {
    //console.log('Value of the object this', this);
    this.install(swgs);
    
    this.fetch(swgs);
    
    this.activate(swgs);
  },
  cachedResources: function () {
    var cachedResources = new Cache();
    
    return cachedResources;
  },
  install: function install(swgs) {
    swgs.addEventListener('install', function install(evt) {
      console.log('Install complete');
      
       evt.waitUntil(caches.open(CacheVersion.ver2)
       .then(function createCache(cache) {
         console.log('ServiceWorker is caching:', cache);
         return cache.addAll(CacheFiles.files1);
       }));      
    });
  },
  activate: function activate(swgs) {
    swgs.addEventListener('activate', function activate(evt) {
      console.log('[ServiceWorker actvated]');
      evt.waitUntil(caches.keys()
      .then(function deleteOldCache(cacheNames) {
        Promise.all(cacheNames.map(function mapCacheNames(theCacheName) {
          if (theCacheName !== CacheVersion.ver2) {
            console.log('Deleting old cache from:', theCacheName);
            return caches.delete(theCacheName);
          }
        }));
      }));
    });
  },
  fetch: function fetch(swgs) {
    swgs.addEventListener('fetch', function fetch(evt) {
      if (evt.respondWith) {
        console.log('Whats passed into respond with as the request', evt.request);
        evt.respondWith(caches.match(evt.request).catch(function() {
          console.log('FIRST CATCH OF fetch evt.respondWith');
          return fetch(evt.request);
        }).then(function getResponse(resp) {
          console.log('[ServiceWorker]: Found in cache', evt.request.url);
          console.log('Value of evt', evt);
          console.log('Value of resp', resp);
          if (resp) {
            return resp;
          }
          return fetch(evt.request).then(function(resp){
            caches.open(CacheVersion.ver2).then(function returnCloneCache(cache) {
              console.log('time to do some fethcing an add to the cache');
              cache.put(evt.request, resp);
            });
            return resp;
          });
        }).catch(function (err) {          
          if (fetch.then) {
            console.log('Gaflavady', evt);
            fetch(evt.request).then(function catchCacheResponseFaled(resp) {
              console.log('Fetching in catch:', evt.request.url);
              caches.open(CacheVersion.ver2).then(function returnCloneCache(cache) {
                console.log('time to do some fethcing an add to the cache');
                cache.put(evt.request, resp);
              });
              return resp;
            });
          }
          //Provide a fallback in case of an error
        }));
      }
    });
  }
};

ServiceWorkerObj.init(this);
