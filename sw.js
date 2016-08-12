(function ServiceWorker() {
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
      '/fallback/index.html',
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
      '/states/about/index.js',
      '/states/home/index.js',
      '/states/main/index.html',
      '/states/about/index.html',
      '/states/home/index.html',
      '/index.css',
      '/index.html',
      '/main.config.js'
    ]
  };
  
  var offlinePage = {
    files: [
      '/fallback/index.html',
      '/fallback/index.css'
    ]
  };
  
  var ServiceWorkerObj = {
    init: function init(swgs) {
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
        console.info('[Service Worker] Install complete');
        
         evt.waitUntil(caches.open(CacheVersion.ver1)
         .then(function createCache(cache) {
           console.info('ServiceWorker is caching:');
           return cache.addAll(CacheFiles.files1);
         }));      
      });
    },
    activate: function activate(swgs) {
      swgs.addEventListener('activate', function activate(evt) {
        console.info('[ServiceWorker actvated]');
        evt.waitUntil(caches.keys()
        .then(function deleteOldCache(cacheNames) {
          Promise.all(cacheNames.map(function mapCacheNames(theCacheName) {
            if (theCacheName !== CacheVersion.ver1) {
              console.info('Deleting old cache from:', theCacheName);
              return caches.delete(theCacheName);
            }
          }));
        }));
      });
    },
    fetch: function fetchResp(swgs) {
      var _this = this;
      swgs.addEventListener('fetch', function fetchEvent(evt) {
        if (evt.respondWith) {
          evt.respondWith(caches.match(evt.request)
          .catch(function() {
            //If no cached version is found, fetch from the network
            return evt.default();
          })
          .catch(function () {
            //'It's failing so fetch here
            return fetch(evt.request).then(function (resp) {
              return resp;
            }, function (rej) {
              console.info('fetch rejected due to:', rej);
            });
          })
          .then(function getResponse(resp) {
            console.info('[ServiceWorker]: Found in cache', evt.request.url);
            return resp || _this.getContent(evt);
          }).catch(function (err) {
            console.info('Something went wrong during the fetch.  The file was not found in the cache...Fetching from the network for', evt.request.url);  
            
            _this.getContent(evt);
          }));
        }
      });
    },
    getContent: function grabIt(evt) {
      fetch(evt.request).then(function getContent(resp) {
        caches.open(CacheVersion.ver1).then(function storeInCache(cache) {
          console.info('time to do some fethcing an add to the cache');
          cache.put(evt.request, resp);
        });
        return resp;
      });
    }
  };
  
  ServiceWorkerObj.init(this);
}());


