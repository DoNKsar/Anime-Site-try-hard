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
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
  mouseDrag: false,
});

/*------------------
      MIXIT UP
  --------------------*/
$(window).on("load", function () {
  $(".filter__controls li").on("click", function () {
    $(".filter__controls li").removeClass("active");
    $(this).addClass("active");
  });
  if ($(".filter__gallery").length > 0) {
    const containerEl = document.querySelector(".filter__gallery");
    const mixer = mixitup(containerEl);
  }
});

/*------------------
    SEARCH OVERLAY
  --------------------*/
$(".search-switch").on("click", function () {
  $(".search-model").fadeIn(400);
});

$(".search-close-switch").on("click", function () {
  $(".search-model").fadeOut(400, function () {
    $("#search-input").val("");
  });
});

/*------------------
     HAMBURGER NAV
  --------------------*/
$(document).ready(function () {
  let trigger = $(".hamburger"),
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
loginForm.style.display = "none";

document.getElementById("login").addEventListener("click", function () {
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    loginForm.style.posiiton = "fixed";
    loginForm.style.width = "100%";
    loginForm.style.height = "100%";
    loginForm.style.backgroundColor = "rgba(20, 20, 20, 0.8)";
    loginForm.style.zIndex = "9999";
  } else {
    loginForm.style.display = "none";
  }
});

$(".login-btn").on("click", function () {
  $("#login").fadeIn(400);
  $("#form-element").fadeIn(400);
});

$(".login-close-btn").on("click", function () {
  $("#form-element").fadeOut(400);
});

/*------------------
      Preloader
  --------------------*/
$(window).on("load", function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});

/*------------------
      ANIME API
  --------------------*/
// const productTextElements = document.querySelectorAll(".product__item__text, .product__sidebar__rec__item__text, .product__sidebar__view__item");

// window.addEventListener("DOMContentLoaded", () => {
//   const titleLinks = document.querySelectorAll("h5 a");

//   titleLinks.forEach(link => {
//     link.addEventListener("click", event => {
//       link.href = "/Assets/Pages_of_anime/Details.html"
//       event.preventDefault();
//       const clickedTitle = event.target.innerText;
//       sessionStorage.setItem("clickedTitle", clickedTitle);
//       // Redirect to the details.html page
//       window.location.href = event.target.getAttribute("href");
//     });
//   });
// });

// productTextElements.forEach((element, index) => {
//   const titleLink = element.querySelector("h5 a");

//   if (titleLink) {
//     const title = titleLink.innerText;
//     const encodedTitle = encodeURIComponent(title);

//     setTimeout(() => {
//       fetch(`https://api.jikan.moe/v4/anime?q=${encodedTitle}&limit=1`)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data.data);
//           const anime = data.data;

//           const imgElements = document.querySelectorAll(".product__item__pic, .product__sidebar__view__item, .product__sidebar__rec__item__pic");
//           const imgElement = imgElements[index];

//           if (anime[0].images && anime[0].images.jpg) {
//             imgElement.style.backgroundImage = `url(${anime[0].images.jpg.large_image_url})`;

//             if (imgElement.tagName === "DIV") {
//               const imgTag = imgElement.querySelector("img");
//               if (imgTag) {
//                 imgTag.src = anime[0].images.jpg.large_image_url;
//               }
//             }
//           } else {
//             imgElement.innerHTML = 'Image not available';
//           }
//         })
//         .catch(error => console.log(error));
//     }, index * 1000); // delay of 1 second
//   }
// });
// ............................................................................
/*------------------
      ANIME API V.2
  --------------------*/
// const productTextElements = document.querySelectorAll(
//   ".product__item__text, .product__sidebar__rec__item__text, .product__sidebar__view__item"
// );

// window.addEventListener("DOMContentLoaded", () => {
//   const titleLinks = document.querySelectorAll("h5 a");

//   titleLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       link.href = "/Assets/Pages_of_anime/Details.html";
//       event.preventDefault();
//       const clickedTitle = event.target.innerText;
//       sessionStorage.setItem("clickedTitle", clickedTitle);
//       // Redirect to the details.html page
//       window.location.href = event.target.getAttribute("href");
//     });
//   });
// });

// productTextElements.forEach((element, index) => {
//   const titleLink = element.querySelector("h5 a");

//   if (titleLink) {
//     const title = titleLink.innerText;
//     const encodedTitle = title.replace(/[^a-zA-Z0-9]+/g, "-");

//     fetch(`https://api.consumet.org/anime/gogoanime/info/${encodedTitle}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         const anime = data;

//         const genreListElements = element.querySelectorAll("ul li");

//         if (anime.genres && anime.genres.length > 0) {
//           genreListElements.forEach((liElement, i) => {
//             if (i < anime.genres.length) {
//               liElement.textContent = anime.genres[i];
//             } else {
//               liElement.style.display = "none";
//             }
//           });
//         } else {
//           genreListElements.forEach((liElement) => {
//             liElement.style.display = "none";
//           });
//         }

//         const imgElements = document.querySelectorAll(
//           ".product__item__pic, .product__sidebar__view__item, .product__sidebar__rec__item__pic"
//         );
//         const imgElement = imgElements[index];

//         if (anime.image) {
//           imgElement.style.backgroundImage = `url(${anime.image})`;
//           if (imgElement.tagName === "DIV") {
//             const imgTag = imgElement.querySelector("img");
//             if (imgTag) {
//               imgTag.src = anime.image;
//             }
//           }
//         } else {
//           imgElement.innerHTML = "Image not available";
//         }

//         const epElements = document.querySelectorAll(".product__item__pic .ep");
//         epElements.forEach((epElement) => {
//           if (anime.totalEpisodes) {
//             epElement.textContent = `${anime.totalEpisodes} / ${anime.totalEpisodes}`;
//           } else {
//             epElement.style.display = "none";
//           }
//         });
//       })

//       .catch((error) => console.log(error));
//   }
// });

const productTextElements = document.querySelectorAll(
  ".product__item__text, .product__sidebar__rec__item__text, .product__sidebar__view__item"
);
const epElements = document.querySelectorAll(".product__item__pic .ep , .ep");

const titleLinks = document.querySelectorAll("h5 a");

titleLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    link.href = "/Assets/Pages_of_anime/Details.html";
    event.preventDefault();
    const clickedTitle = event.target.innerText;
    sessionStorage.setItem("clickedTitle", clickedTitle);
    // Redirect to the details.html page
    window.location.href = event.target.getAttribute("href");
  });
});

productTextElements.forEach((element, index) => {
  const titleLink = element.querySelector("h5 a");

  if (titleLink) {
    const title = titleLink.innerText;
    const encodedTitle = title.replace(/[^a-zA-Z0-9]+/g, "-");

    fetch(`https://api.consumet.org/anime/gogoanime/info/${encodedTitle}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const anime = data;

        const genreListElements = element.querySelectorAll("ul li");

        if (anime.genres && anime.genres.length > 0) {
          genreListElements.forEach((liElement, i) => {
            if (i < anime.genres.length) {
              liElement.textContent = anime.genres[i];
            } else {
              liElement.style.display = "none";
            }
          });
        } else {
          genreListElements.forEach((liElement) => {
            liElement.style.display = "none";
          });
        }

        const imgElements = document.querySelectorAll(
          ".product__item__pic, .product__sidebar__view__item, .product__sidebar__rec__item__pic"
        );
        const imgElement = imgElements[index];

        if (anime.image) {
          imgElement.style.backgroundImage = `url(${anime.image})`;
          if (imgElement.tagName === "DIV") {
            const imgTag = imgElement.querySelector("img");
            if (imgTag) {
              imgTag.src = anime.image;
            }
          }
        } else {
          imgElement.innerHTML = "Image not available";
        }

        if (anime.totalEpisodes) {
          epElements[
            index
          ].textContent = `${anime.totalEpisodes} / ${anime.totalEpisodes}`;
        } else {
          epElements[index].style.display = "none";
        }
      })

      .catch((error) => console.log(error));
  }
});

/*------------------
      FOLLOW BUTTON
  --------------------*/
let follow = document.querySelector(".fa-beat");
follow.style.display = "none";
document.querySelector(".fa-beat").addEventListener("click", function () {
  if (follow.style.display === "none") {
    follow.style.display = "block";
  } else {
    follow.style.display = "none";
  }
});

let secondFollow = document.querySelector(".fa-heart-o");
secondFollow.style.display = "inline-block";
document.querySelector(".fa-heart-o").addEventListener("click", function () {
  if (secondFollow.style.display === "inline-block") {
    secondFollow.style.display = "none";
  } else {
    fsecondFollow.style.display = "inline-block";
  }
});

$(".follow-btn").on("click", function () {
  if ($(".fa-beat").is(":visible")) {
    $(".fa-beat").fadeOut(1);
    $(".fa-heart-o").fadeIn(400);
  } else {
    $(".fa-beat").fadeIn(400);
    $(".fa-heart-o").fadeOut(1);
  }
});

/*------------------
      COMMENT SECTION
  --------------------*/

document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const commentInput = document.getElementById("comment-input").value;
    if (commentInput.trim() === "") return;

    const newComment = document.createElement("div");
    newComment.className = "anime__review__item";

    const randomProfilePic =
      "/Assets/Profile/profile" + getRandomNumber(1, 6) + ".jpg";

    const minutesAgo = getMinutesAgo(new Date());

    newComment.innerHTML = `
    <div class="anime__review__item__pic">
      <img src="${randomProfilePic}" alt="">
    </div>
    <div class="anime__review__item__text">
      <h6>Your Name - <span>${minutesAgo} minutes ago</span></h6>
      <p>${commentInput}</p>
    </div>
  `;

    const commentSection = document.getElementById("comment-section");
    if (commentSection.firstChild);
    commentSection.insertBefore(newComment, commentSection.firstChild);

    document.getElementById("comment-input").value = "";
  });

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMinutesAgo(date) {
  const now = new Date();
  const diff = (now - date) / 1000; // seconds
  return Math.floor(diff / 60); // minutes
}
