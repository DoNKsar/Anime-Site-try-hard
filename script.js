
/*------------------
      OwlCarousel
  --------------------*/

let hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: true,
        autoplay: true,
        mouseDrag: false
    });


 /*------------------
      MIXIT UP
  --------------------*/
$(window).on('load', function () {
    $('.filter__controls li').on('click', function () {
        $('.filter__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.filter__gallery').length > 0) {
        const containerEl = document.querySelector('.filter__gallery');
        const mixer = mixitup(containerEl);
    }
});


 /*------------------
    SEARCH OVERLAY
  --------------------*/
$('.search-switch').on('click', function () {
    $('.search-model').fadeIn(400);
});

$('.search-close-switch').on('click', function () {
    $('.search-model').fadeOut(400, function () {
        $('#search-input').val('');
    });
});



 /*------------------
     HAMBURGER NAV
  --------------------*/
$(document).ready(function () {
    var trigger = $(".hamburger"),
      overlay = $(".overlay"),
      isClosed = false;
  
    trigger.click(function () {
      hamburger_cross();
    });
  
    function hamburger_cross() {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass("is-open");
        trigger.addClass("is-closed");
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass("is-closed");
        trigger.addClass("is-open");
        isClosed = true;
      }
    }
  
    $('[data-toggle="offcanvas"]').click(function () {
      $("#wrapper").toggleClass("toggled");
    });
  });
  

 /*------------------
    LOGIN & SWITCHER
  --------------------*/
const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});


let loginForm = document.getElementById("form-element");
loginForm.style.display = "none"

document.getElementById("login").addEventListener("click", function() {
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    loginForm.style.posiiton = "fixed";
    loginForm.style.width = "100%"
    loginForm.style.height = "100%"
    loginForm.style.backgroundColor = "rgba(20, 20, 20, 0.8)"
    loginForm.style.zIndex = "9999"
  } else {
    loginForm.style.display = "none";
  }
});

$('.login-btn').on('click', function () {
  $('#login').fadeIn(400);
  $('#form-element').fadeIn(400);
});

$('.login-close-btn').on('click', function () {
  $('#form-element').fadeOut(400);
});

  /*------------------
      Preloader
  --------------------*/
  $(window).on('load', function () {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
  });





 /*------------------
      ANIME API
  --------------------*/
const productTextElements = document.querySelectorAll(".product__item__text, .product__sidebar__rec__item__text, .product__sidebar__view__item");

window.addEventListener("DOMContentLoaded", () => {
  const titleLinks = document.querySelectorAll("h5 a");

  titleLinks.forEach(link => {
    link.addEventListener("click", event => {
      link.href = "/Assets/Pages_of_anime/Details.html"
      event.preventDefault();
      const clickedTitle = event.target.innerText;
      sessionStorage.setItem("clickedTitle", clickedTitle);
      // Redirect to the details.html page
      window.location.href = event.target.getAttribute("href");
    });
  });
});

productTextElements.forEach((element, index) => {
  const titleLink = element.querySelector("h5 a");

  if (titleLink) {
    const title = titleLink.innerText;
    const encodedTitle = encodeURIComponent(title);

    setTimeout(() => {
      fetch(`https://api.jikan.moe/v4/anime?q=${encodedTitle}&limit=1`)
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          const anime = data.data;



          const imgElements = document.querySelectorAll(".product__item__pic, .product__sidebar__view__item, .product__sidebar__rec__item__pic");
          const imgElement = imgElements[index];

          if (anime[0].images && anime[0].images.jpg) {
            imgElement.style.backgroundImage = `url(${anime[0].images.jpg.large_image_url})`;

            if (imgElement.tagName === "DIV") {
              const imgTag = imgElement.querySelector("img");
              if (imgTag) {
                imgTag.src = anime[0].images.jpg.large_image_url;
              }
            }
          } else {
            imgElement.innerHTML = 'Image not available';
          }
        })
        .catch(error => console.log(error));
    }, index * 1000); // delay of 1 second
  }
});




 /*------------------
      FOLLOW BUTTON
  --------------------*/
let follow = document.querySelector(".fa-beat");
follow.style.display = "none";
document.querySelector(".fa-beat").addEventListener("click", function() {
  if (follow.style.display === "none") {
    follow.style.display = "block";
  } else {
    follow.style.display = "none";
  }
});

let secondFollow = document.querySelector(".fa-heart-o")
secondFollow.style.display = "inline-block";
document.querySelector(".fa-heart-o").addEventListener("click", function() {
  if (secondFollow.style.display === "inline-block") {
    secondFollow.style.display = "none";
  } else {
    fsecondFollow.style.display = "inline-block";
  }
});


$('.follow-btn').on('click', function () {
  if ($('.fa-beat').is(':visible')) {
    $('.fa-beat').fadeOut(1);
    $('.fa-heart-o').fadeIn(400);
  } else {
    $('.fa-beat').fadeIn(400);
    $('.fa-heart-o').fadeOut(1);
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var watchNowLink = document.getElementById('watch-now-link');
  var videoPlayerDiv = document.querySelector('.anime__video__player');

  watchNowLink.addEventListener('click', function(event) {
    event.preventDefault();

    sessionStorage.clear();

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/Ciy0kf5EE3E';
    iframe.title = 'Official Trailer | The Eminence in Shadow – 2022 | English Sub';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    videoPlayerDiv.innerHTML = '';
    videoPlayerDiv.appendChild(iframe);
  });
});