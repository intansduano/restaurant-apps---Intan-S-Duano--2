import RestaurantSource from '../../data/restaurant-data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
    async render() {
        return `
            <div class="content">
                <h2 class="latest__label">Restaurant List</h2>
                <div id="restaurants" class="posts">
            </div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.restaurantList();
        const restoContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default RestaurantList;