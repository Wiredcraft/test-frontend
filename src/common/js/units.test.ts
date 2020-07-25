/**
 * units test
 * Sat Jul 25 17:24:56 2020
 * by xiaoT
 */

import { calcImageSize } from './units'

const imageSrc = 'https://picsum.photos/240/392?random=286'
describe('Units Test', () => {
  // function calcImageSize shoule be return correct image size
  it('function calcImageSize shoule be return correct image size', () => {
    const imageSize = calcImageSize(imageSrc)

    expect(imageSize.width).toEqual(240)
    expect(imageSize.height).toEqual(392)
    expect(imageSize.rate).toEqual(240 / 392)
  })
})