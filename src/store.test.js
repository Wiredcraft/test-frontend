import Store from './store'

describe('store', () => {
  it('create random regions', () => {
    const store = new Store()
    store.createRandomRegions()

    expect(store.regions).not.toBeNull()
    expect(store.regions.length).toBeGreaterThanOrEqual(10)
  })

  it('filter region', () => {
    const store = new Store()
    store.createRandomRegions()

    store.changeFilterType('city')
    expect(store.filterType).toBe('city')

    store.filteredRegions.forEach(region => {
      expect(region.type).toBe('city')
    })
  })
})
