import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
    <div id="query" class="content">
      <h2 class="latest__label">Liked Restaurants</h2>
      <div id="restaurants" class="posts">
 
      </div>
    </div>
  `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestoIdb.getAllRestos();
        const restoContainer = document.querySelector('#restaurants');

        restaurants.forEach((restaurant) => {
            restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Like;