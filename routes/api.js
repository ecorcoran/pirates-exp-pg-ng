var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/pirates', function(req, res, next) {
  knex('pirates').then(function (pirates) {
    res.json(pirates);
  })
});

module.exports = router;
