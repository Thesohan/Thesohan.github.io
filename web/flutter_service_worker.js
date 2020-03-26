'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fa102c0069c1068f06c6050587a49936",
"assets/assets/works/local.png": "bbfd43690cede7dab464a2eb30f101ed",
"assets/assets/works/sharednotice.png": "e4fbf8d47229d3d074e0546075487873",
"assets/assets/works/isafe.png": "5a0da38d2182d8a5f3f9d592c9f32d3a",
"assets/assets/works/topnotes.png": "63de8a536f19a4bd27cfeb646ab70a76",
"assets/assets/works/foodheaven.png": "0711a962be6fe62a1f9efe4b3d01ef55",
"assets/assets/ib.png": "183a292feeeb9cc7ac9bc6da7e676413",
"assets/assets/atg.png": "c4800513ef47d404e37bd74a331dec7b",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/koverhoop.png": "2586ff334cee6ecdb605a385d7ffaa6e",
"assets/assets/genesis.png": "e1e59619f2d08f945ab006f379f5b0b9",
"assets/assets/hacker.png": "dd8b0788ea6ddf402bd74bb655d10b9e",
"assets/assets/svm.jpeg": "8e14717cbe935c494f3bd780b6d8259c",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/avatar.jpg": "c7a35fe03adb4a393a49a8d522801049",
"assets/assets/nituk.jpg": "0656721aa359d88411470c2c4e41a9b8",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/ratemysinging.webp": "60f0dbc46f3a6c7001db819de5efa480",
"assets/assets/cetpa.png": "c0b3486dea55e878d7dc90a88d092fdb",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/LICENSE": "4261ac07ca3397d9ea5e04b6f0e0ede8",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"main.dart.js": "31ee59e4c8f339630301e007b17d9b94",
"index.html": "8e3dfdde5f28d24b69fc72b94aa9e485"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
