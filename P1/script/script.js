let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.querySelector(".depoimentos-slide").getElementsByTagName("img");
  let dots = document.querySelectorAll(".dot");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";

  dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.querySelector(".prev").addEventListener("click", function() {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
  plusSlides(1);
});

let dots = document.querySelectorAll(".dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    currentSlide(i);
  });
}

let slideshowInterval = setInterval(function() {
  plusSlides(1);
}, 3000);

document.querySelector(".depoimentos-conteudos").addEventListener("mouseover", function() {
  clearInterval(slideshowInterval);
});

document.querySelector(".depoimentos-conteudos").addEventListener("mouseout", function() {
  slideshowInterval = setInterval(function() {
    plusSlides(1);
  }, 1000);
});
