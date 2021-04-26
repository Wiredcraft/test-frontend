import {PhotoData} from '../photos'

export interface Search {
  find(keyword: string): PhotoData[]
}

export * from './RegexSearch'
export * from './IndexedRegexSearch'
