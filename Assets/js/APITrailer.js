window.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".anime__video__player");
    const clickedTitle = sessionStorage.getItem("clickedTitle");
  
    if (clickedTitle) {
      titleElement.innerText = clickedTitle;
  
      fetch(`https://api.jikan.moe/v4/anime?q=${clickedTitle}&limit=1`)
        .then(response => response.json())
        .then(data => {
          const anime = data.data[0];
          const title = anime.title
            console.log(anime);
          if (anime) {
            const trailer = anime.trailer.embed_url;
            console.log(trailer);
  
            const iframe = document.createElement("iframe");
            iframe.src = trailer;
            iframe.title = anime.titles;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
  
            const playerElement = document.querySelector(".anime__video__player");
            playerElement.innerHTML = '';
            playerElement.appendChild(iframe);
  

  
            // Update other elements with the retrieved anime data as needed
          } else {
            titleElement.innerText = "No anime found";
          }

          const animeSpan = document.querySelector('.breadcrumb__links span')
          animeSpan.innerText = title
        })
        .catch(error => console.log(error));
    } else {
      titleElement.innerText = "No title provided";
    }
  });
  