import {pagination, PaginationResult} from '../utils/pagination/pagination'

export type PhotoData = {
  _id: string
  name: string
  src: string
  index: number
}

const data: PhotoData[] = require('./data.json')

class Photos {
  constructor(protected data: PhotoData[]) {}

  find(page: number, keyword?: string): PaginationResult<PhotoData> {
    return pagination(this.data, page)
  }
}

export const photosService = new Photos(data)
