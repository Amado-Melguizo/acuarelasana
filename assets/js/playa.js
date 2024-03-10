/**
 * Template Name: PhotoFolio
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";


  /**
   * Gallery animal Automation
   */
  var galleryContainer = document.getElementById("galleryPlayaContainer");
  var imageFolder = "../assets/img/galeria/escenasPlaya/";
  var totalImages = 10;

  for (var i = 1; i <= totalImages; i++) {
    var imageSrc = imageFolder + "escena_playa_" + i + ".jpg";

    var galleryItem = document.createElement("div");
    galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
    galleryItem.innerHTML = `
         <div class="gallery-item h-100">
            <img src="${imageSrc}" class="img-fluid" alt="">
            <div class="gallery-links d-flex align-items-center justify-content-center">
               <a href="${imageSrc}" title="Gallery ${i}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            </div>
         </div>
      `;

    galleryContainer.appendChild(galleryItem);
  }
});
