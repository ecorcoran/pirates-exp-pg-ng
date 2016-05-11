var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/pirates', function(req, res, next) {
  knex('pirates').then(function (pirates) {
    res.json(pirates);
  })
});

router.post('/pirates', function(req, res, next) {
  var pirate = {
    name: req.body.name,
    poison: req.body.poison,
    accessory: req.body.accessory,
    image_url: req.body.image_url,
    created_at: new Date(),
    updated_at: new Date(),
  }
  knex('pirates').insert(pirate).returning('*').then(function (pirates) {
    res.json(pirates[0]);
  })
});

module.exports = router;
