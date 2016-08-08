module.exports.init = function (models) {
  // Part 1
  models.state.create({
    name: 'Shan state 1',
    lastInput: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456,

    districts: [{
      name: 'Aunglan 11',
      lastInput: 123456,
      forms: 342456,
      voters: 123456,
      update: 342456,

      townships: [{
        name: 'Loilen 111',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }, {
        name: 'Loilen 112',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }]
    }, {
      name: 'Aunglan 11',
      lastInput: 123456,
      forms: 342456,
      voters: 123456,
      update: 342456,

      townships: [{
        name: 'Loilen 111',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }, {
        name: 'Loilen 112',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }]
    }]
  }, {
    include: [{
      model: models.district,
      include: models.township
    }]
  });

  // Part 2
  models.state.create({
    name: 'Shan state 2',
    lastInput: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456,

    districts: [{
      name: 'Aunglan 21',
      lastInput: 123456,
      forms: 342456,
      voters: 123456,
      update: 342456,

      townships: [{
        name: 'Loilen 211',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }]
    }]
  }, {
    include: [{
      model: models.district,
      include: models.township
    }]
  });

  // Part 3
  models.state.create({
    name: 'Shan state 3',
    lastInput: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456,

    districts: [{
      name: 'Aunglan 31',
      lastInput: 123456,
      forms: 342456,
      voters: 123456,
      update: 342456,

      townships: [{
        name: 'Loilen 311',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }]
    }, {
      name: 'Aunglan 32',
      lastInput: 123456,
      forms: 342456,
      voters: 123456,
      update: 342456,

      townships: [{
        name: 'Loilen 321',
        lastInput: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }]
    }]
  }, {
    include: [{
      model: models.district,
      include: models.township
    }]
  });
}
