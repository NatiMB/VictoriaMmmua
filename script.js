/*  Cambia imagen haciendo click
document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    carouselInner.addEventListener("click", function() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    });
  });*/   

 /* Cambia imagen automático
 document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    function changeImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  
    function startCarousel() {
      setInterval(changeImage, 3000);
    }
  
    startCarousel();
  });*/

  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", function() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    });
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("click", function() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
      });
    }
  
    function updateCarousel() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".artistico .carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.querySelector(".artistico #nextButton");
    nextButton.addEventListener("click", function() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    });
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("click", function() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
      });
    }
  
    function updateCarousel() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  });



  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".progresión .carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.querySelector(".progresión #nextButton");
    nextButton.addEventListener("click", function() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    });
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("click", function() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
      });
    }
  
    function updateCarousel() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".teatro .carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.querySelector(".teatro #nextButton");
    nextButton.addEventListener("click", function() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    });
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("click", function() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
      });
    }
  
    function updateCarousel() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".producción .carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.querySelector(".producción #nextButton");
    nextButton.addEventListener("click", function() {
      updateCarousel();
    });
  
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("click", function() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
      });
    }
  
    function updateCarousel() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  });


  /*document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".fieras .carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.querySelector(".fieras #nextButton");
    nextButton.addEventListener("click", function() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    });
  });*/

  document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".fieras .carousel-inner");
    const images = carouselInner.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    images[currentIndex].classList.add("active");
  
    const nextButton = document.querySelector(".fieras #nextButton");
    nextButton.addEventListener("click", function() {
      updateCarousel();
    });
  
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("click", function() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
      });
    }
  
    function updateCarousel() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
  });

  
  
  