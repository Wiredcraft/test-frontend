import {pagination, PaginationResult} from '../utils'
import {IndexedRegexSearch, RegexSearch, Search} from './search'

export type PhotoData = {
  _id: string
  name: string
  src: string
  index: number
}

/**
 * SearchMode
 *
 * @param SearchMode.Regex - Filter the photos by name with regex directly,
 *                           run with O(n) complexity, n = data length.
 * @param SearchMode.IndexedRegex - keep the relation of the name to photos
 *                                  data, run with O(n) complexity, n = name count.
 * @param SearchMode.Trie
 */
export enum SearchMode {
  Regex,
  IndexedRegex,
  Trie
}

const data: PhotoData[] = require('./data.json')

class Photos {
  searchEngine: Search

  constructor(protected data: PhotoData[], protected mode = SearchMode.Regex) {
    if (mode === SearchMode.Regex) {
      this.searchEngine = new RegexSearch(data)
    }
    if (mode === SearchMode.IndexedRegex) {
      this.searchEngine = new IndexedRegexSearch(data)
    }
  }

  find(page: number, keyword?: string): PaginationResult<PhotoData> {
    return pagination(keyword ? this.search(keyword) : this.data, page)
  }

  search(keyword: string) {
    return this.searchEngine.find(keyword)
  }
}

export const photosService = new Photos(data, SearchMode.IndexedRegex)
