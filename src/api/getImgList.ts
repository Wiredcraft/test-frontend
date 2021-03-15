import { ImgList } from './interfaces'

const getImgList = async (): Promise<ImgList> => {
  const response = await fetch('img_list.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response.json()
}

export default getImgList
