import {
  getCDNImageUrl,
  getColumnCountByDeviceSize,
  getDeviceSizeByWidth,
} from '../src/common/utils'

describe('Util', () => {
  it('getCDNImageUrl', () => {
    expect(getCDNImageUrl('test.svg')).toBe(
      'https://img.lastwhisper.cn/test.svg'
    )
  })

  it('getColumnCountByDeviceSize', () => {
    expect(getColumnCountByDeviceSize('sm')).toBe(2)
  })

  it('getDeviceSizeByWidth', () => {
    expect(getDeviceSizeByWidth(200)).toBe('sm')
    expect(getDeviceSizeByWidth(500)).toBe('sm')
    expect(getDeviceSizeByWidth(768)).toBe('md')
    expect(getDeviceSizeByWidth(800)).toBe('lg')
    expect(getDeviceSizeByWidth(1000)).toBe('xl')
  })
})
