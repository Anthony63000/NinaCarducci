
// Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('images-cache').then(function(cache) {
        var cachePromises = [
          cache.add('./assets/images/gallery/portraits/XL/ade-tunji-rVkhWWZFAtQ-unsplash.WEBP'),
          cache.add('./assets/images/gallery/portraits/S/ade-tunji-rVkhWWZFAtQ-unsplash.WEBP'),
          cache.add('./assets/images/gallery/portraits/XL/nino-van-prattenburg--443cl1uR_8-unsplash.WEBP'),
          cache.add('./assets/images/gallery/portraits/S/nino-van-prattenburg--443cl1uR_8-unsplash.WEBP'),
          cache.add('./assets/images/slider/XL/ryoji-iwata-wUZjnOv7t0g-unsplash.WEBP'),
          cache.add('./assets/images/slider/S/ryoji-iwata-wUZjnOv7t0g-unsplash.WEBP'),
          cache.add('./assets/images/slider/XL/nicholas-green-nPz8akkUmDI-unsplash.WEBP'),
          cache.add('./assets/images/slider/S/nicholas-green-nPz8akkUmDI-unsplash.WEBP'),
          cache.add('./assets/images/slider/XL/edward-cisneros-3_h6-1NPDGw-unsplash.WEBP'),
          cache.add('./assets/images/slider/S/edward-cisneros-3_h6-1NPDGw-unsplash.WEBP'),
          cache.add('./assets/images/nina/XL/nina.WEBP'),
          cache.add('./assets/images/nina/S/nina.WEBP'),
          cache.add('./assets/images/gallery/concerts/XL/austin-neill-hgO1wFPXl3I-unsplash.WEBP'),
          cache.add('./assets/images/gallery/concerts/S/austin-neill-hgO1wFPXl3I-unsplash.WEBP'),
          cache.add('./assets/images/gallery/concerts/XL/aaron-paul-wnX-fXzB6Cw-unsplashXL.WEBP'),
          cache.add('./assets/images/gallery/concerts/S/aaron-paul-wnX-fXzB6Cw-unsplashXL.WEBP'),
          cache.add('./assets/images/gallery/entreprise/XL/ali-morshedlou-WMD64tMfc4k-unsplash.WEBP'),
          cache.add('./assets/images/gallery/entreprise/S/ali-morshedlou-WMD64tMfc4k-unsplash.WEBP'),
          cache.add('./assets/images/gallery/entreprise/XL/jason-goodman-tHO1_OuKbg0-unsplash.WEBP'),
          cache.add('./assets/images/gallery/entreprise/S/jason-goodman-tHO1_OuKbg0-unsplash.WEBP'),
          cache.add('./assets/images/gallery/entreprise/XL/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.WEBP'),
          cache.add('./assets/images/gallery/entreprise/S/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.WEBP'),
          cache.add('./assets/images/gallery/mariage/XL/hannah-busing-RvF2R_qMpRk-unsplash.WEBP'),
          cache.add('./assets/images/gallery/mariage/S/hannah-busing-RvF2R_qMpRk-unsplash.WEBP'),
          cache.add('./assets/images/gallery/mariage/XL/jakob-owens-SiniLJkXhMc-unsplash.WEBP'),
          cache.add('./assets/images/gallery/mariage/S/jakob-owens-SiniLJkXhMc-unsplash.WEBP'),
          cache.add('./assets/images/camera/XL/camera.WEBP'),
          cache.add('./assets/images/camera/S/camera.WEBP')
        ];
  
        return Promise.all(cachePromises);
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
  