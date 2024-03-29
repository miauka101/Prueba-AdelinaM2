 //Iniciar carrusel
 const myCarouselElement = document.querySelector("#miCarrusel");
 const carousel = new bootstrap.Carousel(myCarouselElement, {
   interval: 2000,
   touch: false,
 });


 //Iniciar el toolip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });


// Cambia color "Viajes Chile" a negro cuando se pasa cursor por encima
  document.addEventListener("DOMContentLoaded", function() {
    var navbarBrand = document.querySelector(".navbar-brand");
    navbarBrand.addEventListener("mouseover", function() {
      navbarBrand.style.color = "black";
    });
    navbarBrand.addEventListener("mouseout", function() {
      navbarBrand.style.color = ""; 
    });
  });

