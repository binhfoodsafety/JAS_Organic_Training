// Service Worker cho JAS Organic Training — Lưu trữ ngoại tuyến
var CACHE = 'jas-organic-v1';
var PREFIX = 'jas-organic-';

var FILES = [
  './',
  'index.html',
  'on-tap.html',
  'cong-cu.html',
  'manifest.webmanifest',
  'pwa.js',
  'slides/deck.css',
  'slides/deck.js',
  'study/data.js',
  'study/say.js',
  'study/study.css',
  'study/study.js',
  'study/tools.css',
  'study/tools.js',
  'icons/favicon-32.png',
  'icons/favicon-48.png',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'slides/art/01-tong-quan.svg',
  'slides/art/02-canh-tac.svg',
  'slides/art/03-vat-tu-nam.svg',
  'slides/art/04-che-bien.svg',
  'slides/art/05-ghi-nhan.svg',
  'slides/art/06-tieu-chuan-ky-thuat.svg',
  'slides/art/07-thanh-tra.svg',
  'slides/art/08-can-doi-khoi-luong.svg',
  'slides/01-tong-quan.html',
  'slides/02-canh-tac.html',
  'slides/03-vat-tu-nam.html',
  'slides/04-che-bien.html',
  'slides/05-ghi-nhan.html',
  'slides/06-tieu-chuan-ky-thuat.html',
  'slides/07-thanh-tra.html',
  'slides/08-can-doi-khoi-luong.html'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(
        FILES.map(function (url) {
          return fetch(url, { cache: 'no-cache' }).then(function (res) {
            if (!res.ok) throw new Error('Fetch failed for ' + url);
            return cache.put(url, res);
          });
        })
      );
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (k) {
          // Chỉ xoá các cache cũ của cùng ứng dụng jas-organic-
          if (k.indexOf(PREFIX) === 0 && k !== CACHE) {
            return caches.delete(k);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  e.respondWith(
    caches.match(req).then(function (res) {
      if (res) return res;
      return fetch(req).then(function (netRes) {
        return netRes;
      });
    }).catch(function () {
      if (req.mode === 'navigate') {
        return caches.match('index.html');
      }
    })
  );
});
