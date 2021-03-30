import fs from 'fs';
import sizeOf from 'image-size';
import { IIndexData } from '../interfaces';

export function readDir(dirPath: string): Promise<IIndexData[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (error, files) => {
      if (error) {
        throw error;
      }
      let promises = [];
      for (let file of files) {
        promises.push(base64_encode(dirPath, file));
      }
      return Promise.all(promises).then((results) => resolve(results)).catch((err) => reject(err));
    });
  });
}

function base64_encode(folder: string, file: string): Promise<IIndexData> {
  return new Promise((resolve) => {
    // read binary data
    folder = folder.endsWith('/') ? folder : folder + '/'
    var bitmap = fs.readFileSync(folder + file);
    // convert binary data to base64 encoded string
    let base64Data = Buffer.from(bitmap).toString('base64');
    // read images size, width and height
    const dimensions = sizeOf(folder + file);
    file = file.toLowerCase();
    let fileType = 'svg+xml';
    if (file.endsWith('.gif')) {
      fileType = 'gif';
    } else if (file.endsWith('.png')) {
      fileType = 'png';
    } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      fileType = 'jpeg';
    } else if (file.endsWith('.ico')) {
      fileType = 'x-icon';
    }
    let prefix = 'data:image/' + fileType + ';base64,';
    resolve({
      width: dimensions.width,
      height: dimensions.height,
      fileName: file,
      content: prefix + base64Data
    });
  });
}
