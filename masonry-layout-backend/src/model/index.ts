import { IIndexData } from "../interfaces";
import { readDir } from '../utils/index';
import path from 'path';

async function getIndexData(): Promise<IIndexData[]> {
  const imageInfos = await readDir(path.resolve(__dirname, '../assets/images/'));
  return imageInfos.map((imageInfo, index) => {
    return {
      id: index + 1,
      width: imageInfo.width,
      height: imageInfo.height,
      fileName: imageInfo.fileName,
      content: imageInfo.content
    }
  })
}
export default getIndexData;
