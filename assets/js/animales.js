import { getAllPhotos } from './api.js'; // Asegúrate de tener esta función en api.js para conectar con la API

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Gallery animal Automation (Local Images)
   */
  var galleryContainer = document.getElementById("galleryAnimalesContainer");
  var imageFolder = "../assets/img/galeria/mundoAnimal/";
  var totalImages = 10;

  for (var i = 1; i <= totalImages; i++) {
    var imageSrc = imageFolder + "animal_" + i + ".jpg";

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

  /**
   * Gallery animal Automation (API Images)
   */
  async function loadApiAnimalGallery() {
    const apiGalleryContainer = document.getElementById("galleryApiAnimalesContainer");

    try {
      // Llama a la API para obtener todas las fotos
      const photos = await getAllPhotos();

      // Filtra las fotos de tipo "Animales"
      const animalPhotos = photos.filter(photo => photo.type === "Animales");
      
      // Agrega cada foto filtrada al contenedor de la galería API
      animalPhotos.forEach((photo, index) => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
        galleryItem.innerHTML = `
          <div class="gallery-item h-100">
            <img src="${photo.url}" class="img-fluid" alt="${photo.title}">
            <div class="gallery-links d-flex align-items-center justify-content-center">
              <a href="${photo.url}" title="Gallery API ${index + 1}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            </div>
          </div>
        `;

        apiGalleryContainer.appendChild(galleryItem);
      });

    } catch (error) {
      console.error("Error al cargar la galería de animales desde la API:", error);
    }
  }

  // Llama a la función para cargar la galería de animales desde la API
  loadApiAnimalGallery();
});
