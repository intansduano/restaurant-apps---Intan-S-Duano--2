/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    // test 1
    it('should show the like button when the resto has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this resto"]'))
            .toBeTruthy();
    });

    // test 2
    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    // test 3
    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestoIdb.getResto(1);
        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestoIdb.deleteResto(1);
    });

    // test 4 (skenario negatif)
    it('should not add a restaurant again when its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
        await FavoriteRestoIdb.putResto({ id: 1 });

        // Simulasikan pengguna menekan tombol suka restaurant
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // tidak ada restaurant yang ganda
        expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);
        FavoriteRestoIdb.deleteResto(1);
    });

    // test 5 (kebutuhan like & liked)
    // xit
    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
    });
});