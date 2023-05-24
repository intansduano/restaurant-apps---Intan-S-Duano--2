/* eslint-disable prefer-template */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `     
<div class="post-item">   
<div class="post-item__content">
<h2 class="post-item__title">${restaurant.name}</h2>
        <img class="post-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + '/' + restaurant.pictureId}" alt="${restaurant.name}" />
              <h2>Main Information</h2>
        <h4>Area Point: </h4>
<p>${restaurant.city}</p>
        <h4>Average Rating</h4>
            <p>${restaurant.rating}</p>

    <div class="post-item__description-2">
        <h4>Description</h4>
        <p>${restaurant.description}</p>
    </div>

    <div class="menu">
    <h2>Menu</h2>
        
      <h4>Foods</h2>
      <div class="menu-groups"> 
             ${restaurant.menus.foods
           .map(
                 (food, i) => `
                 <div class="menu-item">
                   <p> 🍳 ${food.name}</p>
                      </div>    
                        `,
                 )
      .join('')
      }  
      <h4>Drinks</h4>
      <div class="menu-group"> 
             ${restaurant.menus.drinks
           .map(
                 (drink, i) => `
                 <div class="menu-item">
                   <p> 🍹 ${drink.name}</p>
                  </div>    
                        `,
                        )
           .join('')
         }
      </div>

      <h4>Review</h4>
      <div class="menu-group">
        <p>Oleh ${restaurant.customerReviews[0].name} : </p>
        <p>${restaurant.customerReviews[0].review}</p>
        <p>Pada ${restaurant.customerReviews[0].date}</p>
      </div>
    </div>
</div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="post-item">
        <div class="post-item__content">
            <img class="post-item__thumbnail lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} Picture">
            <a href="#/restaurant/${restaurant.id}"> <h1 class="post-item__title" tabindex="0">${restaurant.name} Restaurant</h1><a/>
            <h4 class="post-item_city" tabindex="0">
            Location: ${restaurant.city}</h4>
            <h4 class="rating">Average Rating: ⭐️${restaurant.rating}⭐️</h4>
            <p class="post-item__description" tabindex="0">${restaurant.description}</p>
            <a tabindex="0 " href="https://www.instagram.com/tans.smith/ " class="socmed-link ">Info Restaurant Contact</a><br>
            <a href="#/restaurant/${restaurant.id}" class="button-item" tabindex="0">Click For More Info</a>  
          </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};