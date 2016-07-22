var CacheVersion = {
  v2: 'v2',
  v2: 'v2'
}

var CacheFiles = {
  files1: [
    './',
    './app/app.js',
    './app/app.config.js',
    './app/app.routes.js',
    './app/app-init.js',
    './images/game-day.jpg',
    './js/bootstrap.js',
    './lib/require.js',
    './states/main/index.js',
    './states/main/index.html',
    './index.css',
    './index.html',
    './main.config.js'
  ]
}

var ServiceWorkerObj = {
  init: function init(swgs) {
    //console.log('Value of the object this', this);
    this.install(swgs);
    this.activate(swgs);
    this.fetch(swgs);
  },
  cachedResources: function () {
    var cachedResources = new Cache();
    
    return cachedResources;
  },
  install: function install(swgs) {
    swgs.addEventListener('install', function install(evt) {
      console.log('Install complete');
      
       evt.waitUntil(caches.open(CacheVersion.v2)
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
          if (theCacheName !== CacheVersion.v2) {
            console.log('Deleting old cache from:', theCacheName);
            return caches.delete(theCacheName);
          }
        }))
      }));
    });
  },
  fetch: function fetch(swgs) {
    swgs.addEventListener('fetch', function fetch(evt) {      
      evt.respondWith(caches.match(evt.request).catch(function() {
        return fetch(evt.request);
      }).then(function getResponse(resp) {
               
        console.log('[ServiceWorker]: Found in cache', evt.request.url);
        
        return resp || fetch(evt.request).then(function(resp){
          return caches.open(CacheVersion.v2).then(function returnCloneCache(cache) {
            console.log('time to do some fetcing an add to the cache');
            cache.put(evt.request, resp);
            return resp;
          });
        });
      }).catch(function (err) {
        console.log('Something went wrong in the getResponse catch', err);
        //Provide a fallback in case of an error
      }));
    });
  }
}

ServiceWorkerObj.init(this);
