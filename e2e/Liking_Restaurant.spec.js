/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('Menyukai salah satu restaurant dan membatalkannya', async({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.post-item__title');
    await I.grabTextFrom(locate('.post-item__title').first());
    I.click(locate('.post-item__title').first());
    I.wait(2);
    I.click('#likeButton');
    I.amOnPage('/#/like');
    I.click(locate('.post-item__title').first());
    I.wait(2);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');
    I.dontSeeElement('.post-item__title');
});

// Feature('Favorite Restaurant');

// Scenario('check home', ({ I }) => {
//     I.amOnPage('/');
//     I.wait(2);
//     I.seeElement('#restaurant');
//     I.seeElement('.card');
// });

// Scenario('check detail', ({ I }) => {
//     I.amOnPage('/#/restoran/rqdv5juczeskfw1e867');
//     I.wait(2);
//     I.seeElement('.detail-menu');
//     I.seeElement('[aria-label="favorite this restaurant"]');
//     I.dontSeeElement('[aria-label="unfavorite this restaurant"]');
// });

// Scenario('check favorite', ({ I }) => {
//     I.amOnPage('/#/favorite');
//     I.wait(2);
//     I.see('Page Favorited Restaurant is Empty.');
//     I.dontSeeElement('.card');
// });

// Scenario('check favorite one restaurant', ({ I }) => {
//     I.amOnPage('/#/favorite');
//     I.wait(2);
//     I.see('Page Favorited Restaurant is Empty.');
//     I.dontSeeElement('.card');
//     I.amOnPage('/#/restoran/rqdv5juczeskfw1e867');
//     I.wait(2);
//     I.seeElement('[aria-label="favorite this restaurant"]');
//     I.dontSeeElement('[aria-label="unfavorite this restaurant"]');
//     I.click('#favoriteButton');
//     I.wait(2);
//     I.amOnPage('/#/favorite');
//     I.wait(2);
//     I.dontSee('Page Favorited Restaurant is Empty.');
//     I.seeElement('.card');
// });

// Scenario('check unfavorite one restaurant', ({ I }) => {
//     I.amOnPage('/#/favorite');
//     I.wait(2);
//     I.see('Page Favorited Restaurant is Empty.');
//     I.dontSeeElement('.card');
//     I.amOnPage('/#/restoran/rqdv5juczeskfw1e867');
//     I.wait(2);
//     I.seeElement('[aria-label="favorite this restaurant"]');
//     I.dontSeeElement('[aria-label="unfavorite this restaurant"]');
//     I.click('#favoriteButton');
//     I.amOnPage('/#/favorite');
//     I.wait(2);
//     I.seeElement('.card');
//     I.amOnPage('/#/restoran/rqdv5juczeskfw1e867');
//     I.wait(2);
//     I.seeElement('[aria-label="unfavorite this restaurant"]');
//     I.dontSeeElement('[aria-label="favorite this restaurant"]');
//     I.click('#favoriteButton');
//     I.amOnPage('/#/favorite');
//     I.wait(2);
//     I.see('Page Favorited Restaurant is Empty.');
//     I.dontSeeElement('.card');
// });