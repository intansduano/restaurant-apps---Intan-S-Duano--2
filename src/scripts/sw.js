import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
import { precacheAndRoute } from 'workbox-precaching';

// Asset untuk Caching
const assetsToCache = [
    './',
    './icons/maskable_icon.png',
    './icons/maskable_icon_x48.png',
    './icons/maskable_icon_x72.png',
    './icons/maskable_icon_x96.png',
    './icons/maskable_icon_x128.png',
    './icons/maskable_icon_x192.png',
    './icons/maskable_icon_x384.png',
    './icons/maskable_icon_x512.png',
    './index.html',
    './favoicon.png',
    './app.bundle.js',
    './app.webmanifest',
    './sw.bundle.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});

precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});
self.addEventListener('push', () => {
    console.log('Service Worker: Pushed');
});