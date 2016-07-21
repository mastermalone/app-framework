/*this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    return caches.match('/sw-test/gallery/myLittleVader.jpg');
  }));
});
*/
var CacheVersion = {
  v1: 'v1',
  v2: 'v2'
}

var CacheFiles = {
  files1: [
    './',
    './index.html',
    './main.config.js'
  ]
}

var ServiceWorkerObj = {
  init: function init(swgs) {
    console.log('Value of the object this', this);
    this.install(swgs);
    this.activate(swgs);
    this.fetch(swgs);
  },
  install: function install(swgs) {
    swgs.addEventListener('install', function install(evt) {
      console.log('Install complete');
      
       evt.waitUntil(caches.open(CacheVersion.v1)
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
          if (theCacheName !== CacheVersion.v1) {
            console.log('Deleting old cache from:', theCacheName);
            return caches.delete(theCacheName);
          }
        }))
      }));
    });
  },
  fetch: function fetch(swgs) {
    swgs.addEventListener('fetch', function fetch(evt) {
      var response;
      
      
      evt.respondWith(caches.match(evt.request).then(function getResponse(resp) {
        response = resp;
        console.log('Response', resp);
        
        caches.open(CacheVersion.v1).then(function returnCloneCache(cache) {
          cache.put(evt.request, resp);
        });
        
        if (resp) {
          //console.log('HERE is the respnse', resp);
          console.log('[ServiceWorker]: Found in cache', evt.request.url);
          
        }
        return resp.prototype.clone() || fetch(resp);
        
        //return resp || fetch(resp)
        //return fetch(evt.request);
      }).catch(function (err) {
        return caches.match(CacheFiles.files1);
        console.log('Something went wrong in the getResponse catch', err);
      }));
    });
  }
}

ServiceWorkerObj.init(this);

/*this.addEventListener('install', function install(evt) {
  console.log('Install complete');
  
  evt.waitUntil(caches.open('vi').then(function addCache() {
      console.log('Opening Cache');
      return cache.addAll([
        '/'
      ]);
    }));
   
   evt.waitUntil(caches.open(CacheVersion.v1)
   .then(function createCache(cache) {
     console.log('ServiceWorker is caching:', cache);
     return cache.addAll(CacheFiles.files1);
   }));
  
});
*/

/*
this.addEventListener('activate', function activate(evt) {
  console.log('[ServiceWorker actvated]');
  evt.waitUntil(caches.keys()
  .then(function deleteOldCache(cacheNames) {
    Promise.all(cacheNames.map(function mapCacheNames(theCacheName) {
      if (theCacheName !== CacheVersion.v1) {
        console.log('Deleting old cache from:', theCacheName);
        return caches.delete(theCacheName);
      }
    }))
  }));
});*/




/*this.addEventListener('fetch', function fetch(evt) {
  var response;
  
  console.log('Fetch', evt, 'Value of this', this);
  
  evt.respondWith(caches.match(evt.request).catch(function catchRequest() {
      return fetch(evt.request);
    }).then(function getResponse(resp) {
      response = resp;
      console.log('response', resp);
      caches.open('v1').then(function returnCloneCache(cache) {
        cache.put(evt.request, resp);
      });
      return response.clone;
    }).catch(function (err) {
      return caches.match('/');
      console.log('Something went wrong in the getResponse catch', err);
    }));
  evt.respondWith(caches.match(evt.request).then(function getResponse(resp) {
    response = resp;
    console.log('Response', resp);
    
    caches.open(CacheVersion.v1).then(function returnCloneCache(cache) {
      cache.put(evt.request, resp);
    });
    
    return response.clone || fetch(resp);;
    //return fetch(evt.request);
  }).catch(function (err) {
    return caches.match('./');
    console.log('Something went wrong in the getResponse catch', err);
  }));
});*/
