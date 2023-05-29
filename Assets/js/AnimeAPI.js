window.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.getElementById("title__selector");
  const clickedTitle = sessionStorage.getItem("clickedTitle");

  if (clickedTitle) {
    titleElement.innerText = clickedTitle;
  } else {
    titleElement.innerText = "No title provided";
  }



    fetch(`https://api.jikan.moe/v4/anime?q=${clickedTitle}&limit=1`)
      .then(response => response.json())
      .then(data => {
    const anime = data.data[0]



    if (anime) {
      const animeTitle = anime.title;
      titleElement.innerText = animeTitle;

      // Update other elements with the retrieved anime data as needed

    } else {
      titleElement.innerText = "No anime found";
    }


    const description = document.querySelector('.description');
    if (anime.synopsis) {
      description.innerHTML += anime.synopsis;
    } else {
      description.innerHTML = 'Synopsis not available';
    }
    
    const TVtype = document.querySelector('.type ');
    if (anime.type) {
      TVtype.innerHTML += anime.type;
    } else {
      TVtype.innerHTML = 'Type not available';
    }
    
    // const mainTitle = document.querySelector('.anime__details__title h3')
    // if (anime.titles) {
    //   mainTitle.innerHTML += anime.titles[0].title;
    // } else {
    //   mainTitle.innerHTML = 'Title not available';
    // }


    const imgSet = document.querySelector('.anime__details__pic');
    if (anime.images && anime.images.jpg) {
      imgSet.style.backgroundImage = `url(${anime.images.jpg.large_image_url})`;
    } else {
      imgSet.innerHTML = 'Image not available';
    }


    const secondTitle = document.querySelector('.anime__details__title span')
    if (anime.title) {
      secondTitle.innerHTML += anime.titles[1].title;
    } else {
      secondTitle.innerHTML = 'Title not available';
    }


    const studios = document.querySelector('.studios');
    if (anime.studios && anime.studios.length > 0) {
      studios.innerHTML += anime.studios[0].name;
    } else {
      studios.innerHTML = 'Studios not available';
    }
    
    const airEd = document.querySelector('.aired');
    if (anime.aired && anime.aired.string) {
      airEd.innerHTML += anime.aired.string;
    } else {
      airEd.innerHTML = 'Aired date not available';
    }
    
    const currentStatus = document.querySelector('.status');
    if (anime.status) {
      currentStatus.innerHTML += anime.status;
    } else {
      currentStatus.innerHTML = 'Status not available';
    }
    
    const genre = document.querySelector('.genre');
    if (anime.genres && anime.genres.length > 0) {
      genre.innerHTML += anime.genres.map(genre => genre.name).join(', ');
    } else {
      genre.innerHTML = 'Genres not available';
    }
    
    const scores = document.querySelector('.scores');
    if (anime.score) {
      scores.innerHTML += anime.score;
    } else {
      scores.innerHTML = 'Score not available';
    }
    
    const ranks = document.querySelector('.rank');
    if (anime.rank) {
      ranks.innerHTML += anime.rank;
    } else {
      ranks.innerHTML = 'Rank not available';
    }



      
    }
  )
  .catch(error => console.log(error));


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
