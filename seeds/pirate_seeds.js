exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert(
      {
        id: 1,
        name: 'Anne Bonney',
        poison: 'Rum',
        accessory: 'hot temper',
        image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'
      }
    ),
    knex('pirates').insert(
      {
        id: 2,
        name: 'Awilda',
        poison: 'brave princes',
        accessory: 'badass lady friends',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Awilda.jpg'
      }
    ),
    knex('pirates').insert(
      {
        id: 3,
        name: 'Ching Shih',
        poison: 'Opium',
        accessory: 'Governmenal pardon',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%E9%84%AD%E4%B8%80%E5%AB%82.jpg'
      }
    )
  );
};
