'use strict';

var express = require('express');
var router = express.Router();
var models  = require('../../models');

router.get('/', function(req, res) {

  var condition = {};
  var params = req.query;

  condition.state = populateLikeCondition('name', params.state)
  condition.district = populateLikeCondition('name', params.district)
  condition.township = populateLikeCondition('name', params.township)

  models.state.findAll({
    where: condition.state,

    include: [{
      model: models.district,
      where: condition.district,
      include: [{
        model: models.township,
        where: condition.township
      }]
    }]
  }).then(function(regions) {
    res.json(regions)
  });
});

function populateLikeCondition(prop, value) {
  return value ? 
  {
    [prop]: {
      $iLike: '%' + value + '%'
    }
  }
  : {}
}

module.exports = router;
