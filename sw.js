var CacheVersion = {
  ver1: 'v1',
  ver2: 'v2'
}

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
    '/images/gift-day.jpg',
    '/images/home-improvement.jpg',
    '/images/workout-buddy.jpeg',
    '/js/bootstrap.js',
    '/js/app-audio-service/0.1/index.js',
    '/js/app-audio-service/0.1/index-impl.js',
    '/js/slide-table/0.1/index.js',
    '/js/slide-table/0.1/index.html',
    '/js/slide-table/0.1/index.css',
    '/lib/require.js',
    '/lib/angular.js',
    '/lib/domReady.js',
    '/lib/angular-couch-potato.js',
    '/lib/angular-ui-router.min.js',
    '/lib/angular.min.js',
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
        }))
      }));
    });
  },
  fetch: function fetch(swgs) {
    swgs.addEventListener('fetch', function fetch(evt) {
      if (evt.respondWith) {
        console.log('Whats passed into respond width', evt.request);
        evt.respondWith(caches.match(evt.request).catch(function() {
          console.log('Whats happening in the first catch?');
          return fetch(evt.request);
        }).then(function getResponse(resp) {
          console.log('[ServiceWorker]: Found in cache', evt.request.url);
          console.log('Value of evt', evt);
          if (resp) {
            return resp
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
}

ServiceWorkerObj.init(this);
