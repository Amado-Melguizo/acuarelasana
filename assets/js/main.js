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
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  //  /**
  //   * Gallery Botanica Automation
  //   */
  //  var galleryContainer = document.getElementById("galleryBotanicaContainer");
  //  var imageFolder = "assets/img/galeria/botanica/";
  //  var totalImages = 27;
  //  for (var i = 1; i <= totalImages; i++) {
  //    var imageSrc = imageFolder + "botanica_" + i + ".jpg";

  //    var galleryItem = document.createElement("div");
  //    galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
  //    galleryItem.innerHTML = `
  //          <div class="gallery-item h-100">
  //             <img src="${imageSrc}" class="img-fluid" alt="">
  //             <div class="gallery-links d-flex align-items-center justify-content-center">
  //                <a href="${imageSrc}" title="Gallery ${i}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
  //                <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
  //             </div>
  //          </div>
  //       `;

  //    galleryContainer.appendChild(galleryItem);
  //  }

  // /**
  //  * Gallery escenasPlaya Automation
  //  */
  // var galleryContainer = document.getElementById(
  //   "galleryEscenasPlayaContainer"
  // );
  // var imageFolder = "assets/img/galeria/escenasPlaya/";
  // var totalImages = 11;

  // for (var i = 1; i <= totalImages; i++) {
  //   var imageSrc = imageFolder + "escena_playa_" + i + ".jpg";

  //   var galleryItem = document.createElement("div");
  //   galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
  //   galleryItem.innerHTML = `
  //         <div class="gallery-item h-100">
  //            <img src="${imageSrc}" class="img-fluid" alt="">
  //            <div class="gallery-links d-flex align-items-center justify-content-center">
  //               <a href="${imageSrc}" title="Gallery ${i}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
  //               <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
  //            </div>
  //         </div>
  //      `;

  //   galleryContainer.appendChild(galleryItem);
  // }

  // /**
  //  * Gallery mundoAnimal Automation
  //  */
  // var galleryContainer = document.getElementById("galleryAnimalContainer");
  // var imageFolder = "assets/img/galeria/mundoAnimal/";
  // var totalImages = 27;

  // for (var i = 1; i <= totalImages; i++) {
  //   var imageSrc = imageFolder + "animal_" + i + ".jpg";

  //   var galleryItem = document.createElement("div");
  //   galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
  //   galleryItem.innerHTML = `
  //         <div class="gallery-item h-100">
  //            <img src="${imageSrc}" class="img-fluid" alt="">
  //            <div class="gallery-links d-flex align-items-center justify-content-center">
  //               <a href="${imageSrc}" title="Gallery ${i}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
  //               <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
  //            </div>
  //         </div>
  //      `;

  //   galleryContainer.appendChild(galleryItem);
  // }

  // /**
  //  * Gallery naturaleza Automation
  //  */
  // var galleryContainer = document.getElementById("galleryBotanicaContainer");
  // var imageFolder = "assets/img/galeria/botanica/";
  // var totalImages = 27;

  // for (var i = 1; i <= totalImages; i++) {
  //   var imageSrc = imageFolder + "botanica_" + i + ".jpg";

  //   var galleryItem = document.createElement("div");
  //   galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
  //   galleryItem.innerHTML = `
  //         <div class="gallery-item h-100">
  //            <img src="${imageSrc}" class="img-fluid" alt="">
  //            <div class="gallery-links d-flex align-items-center justify-content-center">
  //               <a href="${imageSrc}" title="Gallery ${i}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
  //               <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
  //            </div>
  //         </div>
  //      `;

  //   galleryContainer.appendChild(galleryItem);
  // }

  // /**
  //  * Gallery veleros Automation
  //  */
  // var galleryContainer = document.getElementById("galleryBotanicaContainer");
  // var imageFolder = "assets/img/galeria/botanica/";
  // var totalImages = 27;

  // for (var i = 1; i <= totalImages; i++) {
  //   var imageSrc = imageFolder + "botanica_" + i + ".jpg";

  //   var galleryItem = document.createElement("div");
  //   galleryItem.className = "col-xl-3 col-lg-4 col-md-6";
  //   galleryItem.innerHTML = `
  //        <div class="gallery-item h-100">
  //           <img src="${imageSrc}" class="img-fluid" alt="">
  //           <div class="gallery-links d-flex align-items-center justify-content-center">
  //              <a href="${imageSrc}" title="Gallery ${i}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
  //              <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
  //           </div>
  //        </div>
  //     `;

  //   galleryContainer.appendChild(galleryItem);
  // }
});
