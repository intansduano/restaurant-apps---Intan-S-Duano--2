/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
    beforeEach(async() => {
        addLikeButtonContainer();
        await FavoriteRestoIdb.putResto({ id: 1 });
    });

    afterEach(async() => {
        await FavoriteRestoIdb.deleteResto(1);
    });

    // test 6 (unlike)
    it('should display unlike widget when the Resto has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this resto"]'))
            .toBeTruthy();
    });

    // test 7
    it('should not display like widget when the Resto has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this resto"]'))
            .toBeFalsy();
    });

    // test 8
    it('should be able to remove liked Resto from the list', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
    });

    // test 9
    it('should not throw error if the unliked Resto is not in the list', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        // hapus dulu restaurant dari daftar restaurant yang disukai
        await FavoriteRestoIdb.deleteResto(1);

        // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
    });
});