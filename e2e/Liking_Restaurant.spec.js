/* eslint-disable no-undef */
const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#query');
    // I.seeElement('.query'); // membuat test menjadi gagal
    I.waitForElement('.post-item');
    I.see('Tidak ada restaurant untuk ditampilkan', '.post-item__not__found');
});

Scenario('liking one restaurant', ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.post-item__not__found');

    I.amOnPage('/');
    // … kita akan mengisi uji coba berikutnya …
});

Scenario('liking one restaurant', async({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.post-item__not__found');

    I.amOnPage('/');

    // I.waitForElement('.post__title a', 10);

    I.seeElement('.post__title a');

    const firstResto = locate('.post__title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.post-item');

    const likedRestoTitle = await I.grabTextFrom('.post__title');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);
});