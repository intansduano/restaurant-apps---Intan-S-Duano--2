import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-data';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
    async render() {
        return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>

    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailResto(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestos: FavoriteRestoIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
            },
        });
    },
};

export default Detail;