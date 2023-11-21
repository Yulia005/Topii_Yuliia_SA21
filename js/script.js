document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu__item");

    menuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            // Закриваємо бургер-меню
            document.getElementById("menu__toggle").checked = false;
        });
    });
});



// Отримуємо посилання на кнопку "Вгору"
const scrollToTopButton = document.getElementById("scrollToTopBtn");

// Додаємо обробник подій для відслідковування прокрутки сторінки
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        // Показуємо кнопку "Вгору", якщо сторінка прокручена більше 100 пікселів
        scrollToTopButton.style.display = "block";
    } else {
        // Приховуємо кнопку "Вгору", якщо сторінка прокручена менше 100 пікселів
        scrollToTopButton.style.display = "none";
    }
});

// Додаємо обробник подій для прокручування сторінки до верху при натисканні кнопки "Вгору"
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавна анімація прокрутки
    });
});

// slider

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}