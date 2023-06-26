window.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.getElementById("title__selector");
  const clickedTitle = sessionStorage
    .getItem("clickedTitle")
    .replace(/[^a-zA-Z0-9]+/g, "-");

  if (clickedTitle) {
    titleElement.innerText = clickedTitle;
  } else {
    titleElement.innerText = "No title provided";
  }

  fetch(`https://api.consumet.org/anime/gogoanime/info/${clickedTitle}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const anime = data;

      if (anime) {
        const animeTitle = anime.title;
        titleElement.innerText = animeTitle;
      } else {
        titleElement.innerText = "No anime found";
      }

      const description = document.querySelector(".description");
      if (anime.description) {
        description.innerHTML += anime.description;
      } else {
        description.innerHTML = "Description not available";
      }

      const TVtype = document.querySelector(".type ");
      if (anime.type) {
        TVtype.innerHTML += anime.type;
      } else {
        TVtype.innerHTML = "Type not available";
      }

      const imgSet = document.querySelector(".anime__details__pic");
      if (anime.image) {
        imgSet.style.backgroundImage = `url(${anime.image})`;
      } else {
        imgSet.innerHTML = "Image not available";
      }

      const secondTitle = document.querySelector(".anime__details__title span");
      if (anime.otherName) {
        secondTitle.innerHTML += anime.otherName;
      } else {
        secondTitle.innerHTML = "Title not available";
      }

      const subOrDub = document.querySelector(".subOrDub");
      if (anime.subOrDub) {
        subOrDub.innerHTML += anime.subOrDub;
      } else {
        subOrDub.innerHTML = "Studios not available";
      }

      const airEd = document.querySelector(".aired");
      if (anime.releaseDate) {
        airEd.innerHTML += anime.releaseDate;
      } else {
        airEd.innerHTML = "Aired date not available";
      }

      const currentStatus = document.querySelector(".status");
      if (anime.status) {
        currentStatus.innerHTML += anime.status;
      } else {
        currentStatus.innerHTML = "Status not available";
      }

      const genre = document.querySelector(".genre");
      if (anime.genres && anime.genres.length > 0) {
        genre.innerHTML += anime.genres.slice(0, 3).join(", ");
      } else {
        genre.innerHTML = "Genres not available";
      }

      const episodes = document.querySelector(".episodes");
      if (anime.totalEpisodes) {
        episodes.innerHTML += anime.totalEpisodes;
      } else {
        episodes.innerHTML = "Score not available";
      }

      const ranks = document.querySelector(".rank");
      if (anime.rank) {
        ranks.innerHTML += anime.rank;
      } else {
        ranks.innerHTML = "Rank not available";
      }
    })
    .catch((error) => console.log(error));
});

//  $(window).on('load', function () {
//   $('.filter__controls li').on('click', function () {
//     $('.filter__controls li').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('#filterButton').on('click', function () {
//     const filter = $('.filter__controls li.active').data('filter');

//     if (filter === "*") {
//       $('.product__item').show();
//     } else {
//       $('.product__item').hide();
//       $(filter).show();
//     }
//   });
// });
// $(document).ready(function() {
//   $('.filter__controls li').on('click', function () {
//     $('.filter__controls li').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('#filterButton').on('click', function () {
//     const filter = $('.filter__controls li.active').data('filter');

//     if (filter === "*") {
//       $('.product__item:not(.filtered)').fadeIn();
//     } else {
//       $('.product__item').fadeOut(300, function() {
//         $(this).removeClass('filtered');
//         $(this).filter(filter).each(function(index) {
//           $(this).delay(300 * index).fadeIn().addClass('filtered');
//         });
//       });
//     }
//   });

//   if ($('.filter__gallery').length > 0) {
//     const containerEl = document.querySelector('.filter__gallery');
//     const mixer = mixitup(containerEl);
//   }
// });
