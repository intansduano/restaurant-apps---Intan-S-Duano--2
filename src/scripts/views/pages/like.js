/* eslint-disable eqeqeq */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
    <div id="query" class="content">
            <h2 class="latest__label">Your Favorite Restaurants</h2>
            <h3 class="resto__empty_label">You dont have any favorite restaurant</h3>
            <div id="restaurants" class="posts">
        </div>
    </div>
  `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestoIdb.getAllRestos();
        const restoContainer = document.querySelector('.posts');
        const catalogueLabel = document.querySelector('.latest__label');

        if (restaurants.length == 0) {
            catalogueLabel.innerHTML = 'You dont have any favorite restaurant';
        }

        restaurants.forEach((restaurant) => {
            restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Like;