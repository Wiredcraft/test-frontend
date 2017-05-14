// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'States show by default': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)

    browser.elements('css selector','.State',function(result){
      browser.assert.equal(result.value.length,3)
    })

  },
  'Click State show Districts':function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)

    browser.click('.more_cities')
    browser.assert.containsText('tr:nth-child(2)','Bunglan')
    browser.assert.containsText('tr:nth-child(3)','Eunglan')

  },
  'Click District show Counties':function (browser) {

    browser.click('tr:nth-child(2) .more_cities')
    browser.assert.containsText('tr:nth-child(3)','Collen')
    browser.assert.containsText('tr:nth-child(4)','Dollen')

  },
  'Click District again hide Counties':function (browser) {

    browser.click('tr:nth-child(2) .more_cities')
    browser.assert.containsText('tr:nth-child(3)','Eunglan')

  },
  'Click State again hide Districts':function (browser) {

    browser.click('.more_cities')
    browser.assert.containsText('tr:nth-child(2)','Rhan state')

  },
  'search "a" show cities which contains the "a"':function (browser) {

    browser.setValue('input','a').click('.searchIcon')

    browser.elements('css selector','td span:nth-child(2)',function(result){
      browser.assert.equal(result.value.length,9)
    })

  },
  'Click filter District show District cities':function (browser) {

    browser.clearValue('input').setValue('.filter','District')

    browser.elements('css selector','.District',function(result){
      browser.assert.equal(result.value.length,6)
    })

  },
  'Search "a" among District cities':function (browser) {

    browser.setValue('input','a').click('.searchIcon')

    browser.elements('css selector','td span:nth-child(2)',function(result){
      browser.assert.equal(result.value.length,4)
    })

  }


}
