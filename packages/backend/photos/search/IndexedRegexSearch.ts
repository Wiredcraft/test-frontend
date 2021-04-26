import {escapeRegexp} from '../../utils'
import {PhotoData} from '../photos'
import {Search} from './index'

export class IndexedRegexSearch implements Search {
  indexedData: Record<string, PhotoData[]>

  public constructor(protected data: PhotoData[]) {
    this.indexedData = data.reduce<Record<string, PhotoData[]>>((res, item) => {
      let group = res[item.name]
      if (!group) {
        res[item.name] = group = []
      }
      group.push(item)
      return res
    }, {})
  }

  find(keyword: string): PhotoData[] {
    const regex = new RegExp(escapeRegexp(keyword))

    const matchKeys = Object.keys(this.indexedData).filter((key) =>
      regex.test(key)
    )

    if (!matchKeys.length) {
      return []
    }

    return matchKeys
      .map((key) => this.indexedData[key])
      .reduce((res, group) => res.concat(group), [])
      .sort((a, b) => a.index - b.index)
  }
}
