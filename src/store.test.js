import Store from './store'

describe('store', () => {
  it('create random regions', () => {
    const store = new Store()
    store.createRandomRegions()

    expect(store.regions).not.toBeNull()
    expect(store.regions.length).toBeGreaterThanOrEqual(10)
  })
})
