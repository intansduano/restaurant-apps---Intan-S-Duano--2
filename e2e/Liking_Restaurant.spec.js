Feature('Liking restaurant');

const assert = require('assert');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

const firstCondition = 'You dont have any favorite restaurant';

// Tampilkan halaman favorite resto
Scenario('Showing empty like restaurant', ({ I }) => {
    I.seeElement('h3');
    I.see(firstCondition, '.resto__empty_label');
});

// Fungsi klik halaman resto
Scenario('Liking one restaurant', async({ I }) => {
    I.see(firstCondition, '.resto__empty_label');

    I.amOnPage('/');
    I.seeElement('.posts');
    I.seeElement('.content');
    I.seeElement('h1');
    I.seeElement('a');
    I.seeElement('.post-item__title');

    const firstResto = locate('.post-item__title').first();
    const firstRestoTitle = await I.grabTextFrom('.post-item__title a');

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.posts');
    I.seeForElement('.post-item');
    I.seeElement('figure');
    I.seeElement('.post-item__title');

    const likeRestoTitle = await I.grabTextFrom('.post-item__title');

    assert.strictEqual(firstRestoTitle, likeRestoTitle);
});

// Batal sukai restaurant
Scenario('Unliking one restaurant', async({ I }) => {
    I.see(firstCondition, '.resto__empty_label');

    I.amOnPage('/');

    I.seeElement('.posts');
    I.seeElement('.button-item');
    I.seeElement('figure');
    I.seeElement('.post-item__title');

    const firstResto = locate('figure').first();
    const firstRestoTitle = await I.grabTextFrom('.post-item__title');

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.posts');
    I.seeElement('figure');
    I.seeElement('.post-item__title');

    const likeResto = locate('figure').first();
    const likeRestoTitle = await I.grabTextFrom('.post-item__title');

    assert.strictEqual(firstRestoTitle, likeRestoTitle);

    I.click(likeResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('h3');
    I.seeElement('.resto__empty_label');

    const noFavResto = await I.grabTextFrom('.resto__empty_label');

    assert.strictEqual(noFavResto, firstCondition);
});

// Feature('Liking Restaurant');

// Before(({ I }) => {
//     I.amOnPage('/#/like');
// });

// const firstCondition = 'You dont have any favorite restaurant';

// Scenario('showing empty favorited restaurant', ({ I }) => {
//     I.seeElement('.h3');
//     I.see(firstCondition, '.resto__empty_label');
// });

// Scenario('like one restaurant', async({ I }) => {
//     I.see(firstCondition, '.latest__label');

//     I.amOnPage('/');

//     I.seeElement('.post-item__title a');

//     const firstRestaurant = locate('.post-item__title a').first();
//     const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//     I.click(firstRestaurant);

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/like');
//     I.seeElement('.post-item');

//     const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');
//     assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
// });

// Scenario('unliking restaurant', async({ I }) => {
//     I.see(firstCondition, '.latest__label');

//     I.amOnPage('/');
//     I.seeElement('.post-item__title a');

//     const firstRestaurant = locate('.post-item__title a').first();
//     I.click(firstRestaurant);

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/like');
//     I.seeElement('.post-item');

//     I.click(firstRestaurant);

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/like');
//     I.see(firstCondition, '.latest__label');

//     const noFavResto = await I.grabTextFrom('.resto__empty_label');

//     assert.strictEqual(noFavResto, firstCondition);
// });