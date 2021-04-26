import escapeRegexp from 'escape-string-regexp'
import {PhotoData} from '../photos'
import {Search} from './index'

/**
 * Filter photos by name with regex-matcher
 *
 * @param data
 * @param keyword
 */
export class RegexSearch implements Search {
  constructor(protected data: PhotoData[]) {}

  find(keyword: string): PhotoData[] {
    if (typeof keyword !== 'string' || !keyword.trim().length) {
      return this.data
    }
    const regex = new RegExp(escapeRegexp(keyword))
    return this.data.filter((item) => regex.test(item.name))
  }
}
