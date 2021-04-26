import { makeAutoObservable } from 'mobx';
import request from '../request';

class MasonryStore {
  originImgList = [];
  renderImgList = [];
  keyword = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateOriginImgList = (imgs) => (this.originImgList = imgs.slice());

  getImages = async () => {
    const res = await request('http://127.0.0.1:8080/data.json');
    const newArr = res.map((img) => ({
      ...img,

      // extract image height from url
      height: Number(img.src.match(/picsum\.photos\/\d+\/(\d+)/)[1]) || 0,
    }));
    this.updateOriginImgList(newArr);
    return newArr;
  };

  get filteredImgList() {
    console.log('refilter');
    return this.originImgList.filter((img) =>
      this.keyword ? img.name.includes(this.keyword) : true
    );
  }

  // construct column image list group by column number
  updateRenderImgList = (colNum) => {
    const arr = new Array(colNum);
    const heightArr = new Array(colNum).fill(0);

    for (let i = 0, len = this.filteredImgList.length; i < len; i++) {
      let shortestIndex = 0;
      let shortestHeight = heightArr[0];

      // find the shortest column to append img
      for (let j = 0, l = heightArr.length; j < l; j++) {
        if (heightArr[j] < shortestHeight) {
          shortestHeight = heightArr[j];
          shortestIndex = j;
        }
      }

      if (!arr[shortestIndex]) {
        arr[shortestIndex] = [this.filteredImgList[i]];
      } else {
        arr[shortestIndex].push(this.filteredImgList[i]);
      }

      heightArr[shortestIndex] += this.filteredImgList[i].height;
    }

    this.renderImgList = arr;
  };

  updateKeyword = (e) => {
    console.log(e.target.value);
    this.keyword = e.target.value;
  };
}

export default new MasonryStore();
