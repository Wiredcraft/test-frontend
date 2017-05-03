import {observable, computed, action} from 'mobx'

import {mock} from 'mockjs'

export default class Store {
  @observable filterType = 'province'
  @observable queryString = ''
  @observable regions = []

  @computed get filteredRegions () {
    let regions
    if (this.filterType === 'province') {
      regions = this.regions
    } else if (this.filterType === 'city') {
      regions = []
      this.regions.forEach(region => {
        if (region.cities) {
          regions = [...regions, ...region.cities]
        }
      })
    } else if (this.filterType === 'county') {
      regions = []
      this.regions.forEach(region => {
        if (region.cities) {
          region.cities.forEach(city => {
            if (city.counties) {
              regions = [...regions, ...city.counties]
            }
          })
        }
      })
    }
    if (this.queryString) {
      regions = regions.filter(region => region.name.includes(this.queryString))
    }
    return regions
  }

  @action changeFilterType (filterType) {
    this.filterType = filterType
  }

  @action query (queryString) {
    this.queryString = queryString
  }

  @action createRandomRegions () {
    /**
     * Generate data structure of random regions, see http://mockjs.com/.
     * @param {string} type
     */
    const generateDataStructure = type => {
      const dataStructure = type => ({
        id: '@id',
        name: `@${type}`,
        type,
        'lastInput|10000-99999': 1,
        'numberOfVoters|10000-99999': 1,
        'numberOfForms|10000-99999': 1,
        'update|10000-99999': 1
      })
      const data = dataStructure('province')
      if (type === 'city') {
        data['cities|2-4'] = [dataStructure('city')]
      }
      if (type === 'county') {
        data['cities|2-4'] = [dataStructure('city')]
        data['cities|2-4'][0]['counties|2-4'] = [dataStructure('county')]
      }
      return data
    }

    const data = mock({
      'regions|5-8': [
        generateDataStructure('city'),
        generateDataStructure('county')
      ]
    })
    this.regions = data.regions
  }
}
