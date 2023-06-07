import CONFIG from "../../globals/config";

const createMovieDetailTemplate = (res) => `
<h2 class="movie__title">${res.name}</h2>
<img class="movie__poster" src="${CONFIG.BASE_IMG_URL + res.pictureId}" alt="${
  res.name
}" crossorigin="anonymous"/>
<div class="movie__info">
  <h3>Information</h3>
  <h4>Restaurant Name</h4>
  <p>${res.name}</p>
  <h4>Address</h4>
  <p>${res.address}</p>
  <h4>City</h4>
  <p>${res.city}</p>
  <h4>
  Menu List</h4>
  <p>${res.menus.foods.map((item) => `${item.name}`)}</p>
  <p>${res.menus.drinks.map((item) => `${item.name}`)}</p>
</div>
  
  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${res.description}</p>
  </div>
  <div class="movie__overview">
    <h3>Review Mereka</h3>
    ${res.customerReviews.map(
      (item) => `
      <div class="movie-item">
        <div class="movie-item__content">
          <p><b>${item.name}</b></p>
          <p>${item.review}</p>
          <p>${item.date}</p>
        </div>
      </div>
    `
    )}
  </div>
`;

const createMovieItemTemplate = (res) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster lazyload" alt="${
        res.name
      }" crossorigin="anonymous"
           data-src="${
             res.pictureId
               ? CONFIG.BASE_IMG_URL + res.pictureId
               : "https://picsum.photos/id/666/800/450?grayscale"
           }">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${
          res.rating
        }</span></p>
      </div>
    </div>
    <div class="movie-item__content">
    <h3><a href="/#/detail/${res.id}">${res.name}</a></h3>
    <p>${res.description}</p>
    <br>
    <h4>Location: ${res.city}</span></h4>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
