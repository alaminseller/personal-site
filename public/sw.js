/* ─────────────────────────────────────────────────────────────
   Service Worker — Alamin Rafi Portfolio PWA
   Strategy: Cache-first for static assets, Network-first for HTML
───────────────────────────────────────────────────────────── */

const CACHE_NAME = "ar-pwa-v1";
const STATIC_CACHE = "ar-static-v1";

/* Assets to pre-cache on install */
const PRECACHE_URLS = [
  "/",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.svg",
];

/* ── Install: pre-cache shell ─────────────────────────────── */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

/* ── Activate: clean old caches ───────────────────────────── */
self.addEventListener("activate", (event) => {
  const validCaches = [CACHE_NAME, STATIC_CACHE];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !validCaches.includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: smart caching strategy ────────────────────────── */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* Skip cross-origin, API calls, and non-GET */
  if (
    request.method !== "GET" ||
    !url.origin.includes(self.location.origin) ||
    url.pathname.startsWith("/api/")
  ) {
    return;
  }

  /* HTML navigation: Network-first, fallback to cache */
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match("/")))
    );
    return;
  }

  /* Static assets (JS, CSS, images, fonts): Cache-first */
  if (
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|webp|woff2?|ttf|ico)$/)
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            const clone = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(request, clone));
            return res;
          })
      )
    );
    return;
  }

  /* Everything else: Network-first */
  event.respondWith(
    fetch(request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, clone));
        return res;
      })
      .catch(() => caches.match(request))
  );
});
