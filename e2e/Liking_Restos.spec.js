/* eslint-disable no-undef */
const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', 'post-item__not__found');
});

Scenario('liking one resto', ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', 'post-item__not__found');

    I.amOnPage('/');
    // … kita akan mengisi uji coba berikutnya …
});

Scenario('liking one resto', async({ I }) => {
    I.waitForElement('.post-item__title a', 10);
    I.see('Tidak ada restaurant untuk ditampilkan', 'post-item__not__found');

    I.amOnPage('/');

    I.seeElement('.post-item__title a');

    const firstRestaurant = locate('.post-item__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.post-item');

    const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});