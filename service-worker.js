
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('images-cache').then(function(cache) {
        return cache.addAll([
          "./assets/images/gallery/portraits/XL/ade-tunji-rVkhWWZFAtQ-unsplash.WEBP",
           "./assets/images/gallery/portraits/XL/ade-tunji-rVkhWWZFAtQ-unsplash.WEBP",
           "./assets/images/gallery/portraits/XL/nino-van-prattenburg--443cl1uR_8-unsplash.WEBP",
           "./assets/images/gallery/portraits/S/nino-van-prattenburg--443cl1uR_8-unsplash.WEBP",
          "./assets/images/slider/XL/ryoji-iwata-wUZjnOv7t0g-unsplash.WEBP",
          "./assets/images/slider/S/ryoji-iwata-wUZjnOv7t0g-unsplash.WEBP",
          "./assets/images/slider/XL/nicholas-green-nPz8akkUmDI-unsplash.WEBP",
          "./assets/images/slider/S/nicholas-green-nPz8akkUmDI-unsplash.WEBP",
          "./assets/images/slider/XL/edward-cisneros-3_h6-1NPDGw-unsplash.WEBP",
          "./assets/images/slider/S/edward-cisneros-3_h6-1NPDGw-unsplash.WEBP"
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });