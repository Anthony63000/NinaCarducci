
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('images-cache').then(function(cache) {
        return cache.addAll([
          "./assets/images/gallery/portraits/XL/ade-tunji-rVkhWWZFAtQ-unsplash.WEBP",
           "./assets/images/gallery/portraits/S/ade-tunji-rVkhWWZFAtQ-unsplash.WEBP",
           "./assets/images/gallery/portraits/XL/nino-van-prattenburg--443cl1uR_8-unsplash.WEBP",
           "./assets/images/gallery/portraits/S/nino-van-prattenburg--443cl1uR_8-unsplash.WEBP",
          "./assets/images/slider/XL/ryoji-iwata-wUZjnOv7t0g-unsplash.WEBP",
          "./assets/images/slider/S/ryoji-iwata-wUZjnOv7t0g-unsplash.WEBP",
          "./assets/images/slider/XL/nicholas-green-nPz8akkUmDI-unsplash.WEBP",
          "./assets/images/slider/S/nicholas-green-nPz8akkUmDI-unsplash.WEBP",
          "./assets/images/slider/XL/edward-cisneros-3_h6-1NPDGw-unsplash.WEBP",
          "./assets/images/slider/S/edward-cisneros-3_h6-1NPDGw-unsplash.WEBP",
          "./assets/images/nina/XL/nina.WEBP",
          "./assets/images/nina/S/nina.WEBP",
          "./assets/images/gallery/concerts/XL/austin-neill-hgO1wFPXl3I-unsplash.WEBP",
          "./assets/images/gallery/concerts/S/austin-neill-hgO1wFPXl3I-unsplash.WEBP",
          "./assets/images/gallery/concerts/XL/aaron-paul-wnX-fXzB6Cw-unsplashXL.WEBP",
          "./assets/images/gallery/concerts/S/aaron-paul-wnX-fXzB6Cw-unsplashXL.WEBP",
          "./assets/images/gallery/entreprise/XL/ali-morshedlou-WMD64tMfc4k-unsplash.WEBP",
          "./assets/images/gallery/entreprise/S/ali-morshedlou-WMD64tMfc4k-unsplash.WEBP",
          "./assets/images/gallery/entreprise/XL/jason-goodman-tHO1_OuKbg0-unsplash.WEBP",
          "./assets/images/gallery/entreprise/S/jason-goodman-tHO1_OuKbg0-unsplash.WEBP",
          "./assets/images/gallery/entreprise/XL/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.WEBP",
          "./assets/images/gallery/entreprise/S/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.WEBP",
          "./assets/images/gallery/mariage/XL/hannah-busing-RvF2R_qMpRk-unsplash.WEBP",
          "./assets/images/gallery/mariage/S/hannah-busing-RvF2R_qMpRk-unsplash.WEBP",
          "./assets/images/gallery/mariage/XL/jakob-owens-SiniLJkXhMc-unsplash.WEBP",
          "./assets/images/gallery/mariage/S/jakob-owens-SiniLJkXhMc-unsplash.WEBP",
          "./assets/images/camera/XL/camera.WEBP",
          "./assets/images/camera/S/camera.WEBP"
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