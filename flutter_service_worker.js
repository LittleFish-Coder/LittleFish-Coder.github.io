'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cf3d750f358b1e72c2ebf2afef0c668c",
"index.html": "165153482de8c0406e31423c9facea87",
"/": "165153482de8c0406e31423c9facea87",
"main.dart.js": "ce5c76164baa485300f0d549add74db9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3131a44641a3fec55d9b1136149e4a1c",
".git/config": "6c09f1e346fa5b3505a22e73c21092ab",
".git/objects/92/d205493334c2e4bde89b3b08005e08de90fb08": "1db3e2bf22df8e0dceace71d7bf314bf",
".git/objects/50/d03e52652675979fafb0ede594c4d5d7e8c3fa": "c9dc5c4cc8129ef6824199cc450dc4f1",
".git/objects/68/d24c3f8e4a0b9de808edee35dc8fc258e84290": "f57b360fcd828c470ab87ded8269b602",
".git/objects/56/da3b93c2a7d67a6dc6b9faf5173b96808367f7": "76ed33788ceaba2fe39bb4eead3a31ae",
".git/objects/58/095174c4247684c4ccd4a74e7f20af64677676": "0a6a4b6cbc37fca17b5699b8e48267da",
".git/objects/33/bfe5c674806e7164c18c205e6e32a2c3e43228": "4aff7602e92ce45ed38ab991ff6d31ba",
".git/objects/d9/e0f51e4cde4ca2514ec3fc895cbbb8b0413cf1": "bd3e8ca39ea225f76c8b70df4f527bce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a75eee46f41284556d5445db4b3958ee05b36c": "434cba7b4216bba936b24000bb39e6bf",
".git/objects/f4/ff83c249b914c9f4d09f1eb64eed581b3d58b7": "2084f7296dbccf019feee5ad23c5e84a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/20/6bc3652d8cb504f477370418eee9c343f8dbc7": "ee43069e4789bbe5653cc9da24d4b11a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/b1c17262831e942a5ffaa8b16ba3c0e1cee342": "ae798e960abc9f3f5d910a05bb23113a",
".git/objects/86/11ad149a29895dd6fea3b1fb01f15be1ce8998": "370b39b0f8fa599ebe56d9030a4098fc",
".git/objects/2a/eee3c5a8e19ad192424ccaf2074242e3808ce2": "373b88671a3ae2cf6d84d31dd9c2c41d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/10bac28e1f620f9f2dac73ba64cef34e8a98c6": "5ac70cfdf20fb2a63f3cd8ae09dca018",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/6d/61b4046b913786366f32677547c37340613a77": "002a9bc0373e87698c96675f08eb78f4",
".git/objects/6c/699473c9f01bf8b079d55d10eb9b88a77cf487": "126039e7cd738d32dec9346f2f56b84f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/38791546b41b01f0a608e5e07e3e8155bc912a": "c71bf858ebd7880a12de93c6f4ee380c",
".git/objects/bf/90ab4aac904b3a32ec0a655546f85aef73f675": "3c5711c9bc993108c757a97c94689ce5",
".git/objects/ba/e5273729e7bb341061d0f6198e93f6f5babcc2": "13d06d64b2baa3e6fb95499f41ff14fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/1d/4bded6bc8ea5ae5452a83c28a04a6f92ebc5e4": "96090fce38fb6a281b4bc7434968dfab",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/e136aa98e904f7def4b9ad08f1af59728ef568": "399755e3f7877af18eddcd2cbdb53f45",
".git/objects/7a/2a4b0c150384ea2b36196a1091229308031661": "268dfcd5a25e379c4472b72332deacc3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa6a6d43e4f2b1c2b9814227b51b446c",
".git/logs/refs/heads/master": "687f5a87bf184f441a8c4f8bea110c5c",
".git/logs/refs/remotes/origin/master": "7f7a3bec8e508556589bf74c92f697e4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "0d08dd6a130714e8e0e0a375acceebfc",
".git/refs/remotes/origin/master": "0d08dd6a130714e8e0e0a375acceebfc",
".git/index": "15efa364798aff0f1460108ab1d6116f",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "84c583ec0ed144b80dbebe22e0f65078",
"assets/NOTICES": "b69b9b54d53e38cf5f095519bdd54f7e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "766bac6b41063d9e1a4ecf14eea9e252",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/volleyball.jpg": "73f959f088ce0c77c00d68941ae51feb",
"assets/assets/images/player3.jpg": "e9104bb78c998b178660534ecb064b99",
"assets/assets/images/player2.jpg": "ab1894c63aa8d37dc6f3e8dc0715324e",
"assets/assets/images/poster.jpg": "64b5ca04921a6580117657f674531cba",
"assets/assets/images/player1.jpg": "d5a3b23db8af1f4aebe428cbddf9496f",
"assets/assets/images/player4.jpg": "8291afbbc934caa85735f2f83f05eb7d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
