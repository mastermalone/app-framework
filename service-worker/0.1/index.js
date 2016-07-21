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

this.addEventListener('install', function install(evt) {
  evt.waitUntil(caches.open('vi').then(function addCache() {
    return cache.addAll([
      'michaelmalone-member.test.abcmouse.com/',
      'michaelmalone-member.test.abcmouse.com/index.html',
    ]);
  }));
});


this.addEventListener('fetch', function fetch(evt) {
  var response;
  evt.respondWith(caches.match(evt.request).catch(function catchRequest() {
    return fetch(evt.request);
  }).then(function getResponse (resp) {
    response = resp;
    caches.open('v1').then(function returnCloneCache(cache) {
      cache.put(evt.request, response);
    });
    return response.clone;
  }).catch(function () {
    //return caches.match TODO
    console.log('Something went wrong in the getResponse catch');
  }));
});