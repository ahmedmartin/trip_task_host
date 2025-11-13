'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "9cae921a348215db178c432f57c4373d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d2a321b6f37f5560eebd60d624b9aa26",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "524059be166c2b307174bad30094dd33",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fdb16ab1376cf6c5789de44b5509bb3d",
".git/logs/refs/heads/main": "0f64af930d3bdeb3abaaade23448bcbf",
".git/logs/refs/remotes/origin/HEAD": "4f457440b548611a8dca4b16ef85e1ad",
".git/logs/refs/remotes/origin/main": "bd1d1ea0cbe3be46323a58386d656292",
".git/objects/03/def97a82723c5d240d97edb32b1fbf5ba7ee2f": "9de121c38e1202d73087444ab55fc2f1",
".git/objects/08/9b7b0ca0acb5ce01cd9477f07f87ec666ed18e": "8efbc4e7bfd62eb928bb243c8c2cd05a",
".git/objects/0b/6af3a78de860deaab53031bff62550a694e1da": "a4f2ab599cd652c459c77feb90ca725e",
".git/objects/13/3d48e80e981f27f450c201b3a182804083ed62": "e2fb5bedd39427006e738391267f4154",
".git/objects/15/af61a2dbf4fd9ab04c1ed35b46afb95ebcaa5b": "69c0f67330ae60152fce686513ffd66b",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/22/da960cd6fe996cadf0926981c486f3fe9514c6": "6f04ce21fdc551dba94aa5270137d836",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/31/021264e96e078601349bfdbc92d60f11acb960": "7f87f0d863e866ffdba61091c56f8aea",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/6c8912f80988d864fd5521fd26aa98e0d38f5d": "701cc8d956316e0ab6ca1e8e5be63120",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3a/8f731cef3ba3622e94230ffa015a6162c848dc": "c87df53e5b12f64a2a49c7cfe18f3a39",
".git/objects/3e/6b7e427d1389b0d8c9d75e1e0a3947946bcf80": "11fe3d3b002d11dbb6565ad057873c24",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/7dd3617aa15391bb08c815920610a25609f73f": "03275be3fb3e0fb6f43b4ae226b07c13",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/1803d397d425ebcfcbd447fff7c2492cf60047": "49392b1886224628c1cb7cf3aba1a6e5",
".git/objects/52/141afbee4b702d4215e566d26262908f4c84ed": "35575e749d7b29fa3f58d10c843d65cb",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/7f9210b44b1b85b50ccd24716096c2f6e579a5": "2f907c84d15201f2c65fa5819100ad8e",
".git/objects/67/13c1958c48a50c9fda3e9f98b569aaecb8669f": "352c1f53814bee71af38c4f1bdae3995",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/decb41087f49264121a2216843543795f8de3e": "df76e3c3279a217473d47c043637bd3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/c40632ca4bf132f38aa19b1102a09fdc199d59": "653da9cf24fe38fb72749b9107328b40",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/97/29404d9dae754dca8ef016d2fa162abac0916d": "4d246f8c858254156130d290cdea0dfd",
".git/objects/97/dfb8fffc6c74aadc320509f6661cd2e0884bd8": "6afa1ce9aca9caf09093ac32eef019be",
".git/objects/98/ef6db1c2eb74861eb1dfe1c1aafbcc20c1165d": "617945de6572a4f67ddf1ce7830e93c3",
".git/objects/9a/f6c6f61fdac4533e3ebee93d2a3a7b5ea2a9cb": "ac8eb577117a26f91c61393983450de9",
".git/objects/9b/e7beca98ad06f656cff8dab36335fe39c05dcc": "5ce026842aa2e87603ac497fd701428c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/11c0e6b9ccce3f27a70ef0d516d69d07c6b759": "34d5ac19e69f36573cdaf627a855e97a",
".git/objects/b8/7718fdab4cdc6f51239df2238d56daed9f4bf0": "dd99951ba1c332eab120a3e224bfe21a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/fe1c5d76e20fd162bf117773da460a806751ac": "2ed6ea7f225f42990f5e727900b74bff",
".git/objects/c3/329f6b2790957c6d3cfffccdaddbefc4fdd14f": "d99b5c2a078606fbd64d325411a5cbb7",
".git/objects/ca/ab827023d885a3b4f5fbb6eee4eafb87b35ca0": "5ad12ea799b14bc4e251efdf8fa98da8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/43f340d228380d0809b446083dfc066e5de60a": "5017d083e1bac03da9e48edb5c70a5b7",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/7946ce43b6594d418a241c009024ede7275a2d": "c68ca1dfab18c8cf8b1fcf3d145cd9eb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/ed99d91398c3d62352050d123b5fe5e53c0b55": "b197ff12999fd03e2ae7c7e6152a858d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/6cbbd1ef533447edd12a1284d802e4fe80b28f": "c38f8ba526939a8d7113bda7226e8dbf",
".git/objects/fc/3ac25c4612e1b5ed9f50c1e136e069d7b8ddc6": "826cd8a0ba2ea8289e01b651c34f3158",
".git/objects/ff/9bfabdb786f69fe33073cd0e163273362f67ab": "633c86d2358a37481fd9f8ae8321c863",
".git/ORIG_HEAD": "6c42d0dc750d4e07e41265d81f4f171a",
".git/refs/heads/main": "3564a816eeb15fc68d3f881d55345712",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3564a816eeb15fc68d3f881d55345712",
".idea/misc.xml": "4e0efdad9bc27bb7517be53fa3a081f4",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "c707e0cf8a5f2e0bd9937b601940e531",
"assets/AssetManifest.bin": "b880fe93d75482dcb9df6beef9beccca",
"assets/AssetManifest.bin.json": "403634ff16664b42feedfb6f2ca474fd",
"assets/AssetManifest.json": "90c4e98c9ea1d48cb641122bd8b4aa29",
"assets/assets/svg/calendar.svg": "4077b100510c4f5e5996ee346f17348e",
"assets/assets/svg/filter.svg": "1504a9a25d776e37c22fe5d60642cf30",
"assets/assets/svg/logo.svg": "6112ba18ff6d63f2b7ca435c54f62969",
"assets/assets/trips_mock.json": "13e5a3aba99c86f01a2ffcd26ae379ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4a4545cce49f30c7fa4aaa36bf4f47b9",
"assets/NOTICES": "84ca30152f6fe64e598eff5d8092f88d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "847377f2c1426eb12f8c300e57cd6087",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6e57b75e5a79c70591ebb9bc1e4c9068",
"/": "6e57b75e5a79c70591ebb9bc1e4c9068",
"main.dart.js": "d7cadb60150af25472406cfe0f9d287d",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "9e416f76d69a18e526c2bacfda83338d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
