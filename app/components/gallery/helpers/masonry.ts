export interface MasonryLayoutContainerInfo {
  width: number;
}

export interface MasonryLayoutItem {
  width: number;
  height: number;
}

export interface MasonryLayoutItemPosition {
  x: number;
  y: number;
}

export interface MasonryLayoutComputedItem extends MasonryLayoutItem, MasonryLayoutItemPosition {
}

export interface MasonryLayoutOptions extends MasonryLayoutContainerInfo {
  // 列宽
  columnWidth: number;
  // 最小列数
  columnMinNum?: number;
}



//维护一个数组，存有每个列的当前bottom
export class ColumnsBottom {

  columns: Array<number>;

  constructor(colNum: number) {
    this.columns = Array(colNum).fill(0);
  }

  //获取当前最小列的bottom和index
  get minCol() {
    const minColBottom = Math.min(...this.columns)
    const minColIndex = this.columns.indexOf(minColBottom)
    return {
      colBottom: minColBottom,
      colIndex: minColIndex
    }
  }

  get maxColBottom() {
    return Math.max(...this.columns)
  }

  // 设置某列当前bottom
  setColBottom(index: number, bottom: number) {
    this.columns[index] = bottom
  }
}


export class MasonryLayout {
  columns: ColumnsBottom = new ColumnsBottom(1);
  colWidth: number = 0;
  colCount: number = 0;
  hasInit: boolean = false;//单例

  init(options: MasonryLayoutOptions) {
    if (this.hasInit) {
      return;
    }
    this.hasInit = true;
    const { colCount, colWidth } = this.getColSize(options);
    this.colWidth = colWidth;
    this.colCount = colCount;
    this.columns = new ColumnsBottom(colCount)
  }
  // 重新计算，但colWidth和containerWidth不变
  // TODO 未考虑resize，containerWidth会变
  reset() {
    this.columns = new ColumnsBottom(this.colCount)
  }
  // 添加item时需要：1.计算位置；2.计算适配后的高度；3.设置添加后列的bottom。
  // 同时需要重新设置当前列bottom为原bottom+item.height
  addingItem<T extends MasonryLayoutItem>(item: T) {
    const { colBottom, colIndex } = this.columns.minCol;
    // 计算当前item的position
    const currentItemPosition = this.getItemPosition()
    const currentItemHeight = this.getItemHeight({
      originWidth: item.width,
      originHeight: item.height
    })
    // 设置添加后的列bottom
    this.columns.setColBottom(colIndex, colBottom + currentItemHeight);
    // 返回当前item的位置即可
    return {
      ...item,
      ...currentItemPosition,
      width: this.colWidth,
      height: currentItemHeight
    }
  }

  //获取当前容器高度：最大bottom
  get colMaxHeight() {
    return this.columns.maxColBottom;
  }

  //获取当前容器高度：最大bottom
  get colMinHeight() {
    return this.columns.minCol.colBottom;
  }

  get containerWidth() {
    return this.colCount * this.colWidth
  }

  //计算每个item的x,y
  private getItemPosition() {
    const { colBottom, colIndex } = this.columns.minCol;

    return {
      x: this.colWidth * colIndex,
      y: colBottom
    }
  }

  private getItemHeight({ originWidth, originHeight }: { originWidth: number, originHeight: number }) {
    return Math.round(this.colWidth * originHeight / originWidth);
  }

  // 计算总列数，最小列数=1
  // 计算列宽度，在最小列数的设置下，遇到容器宽度不满足最小列数的情况，需要重新计算列宽
  private getColSize(opt: MasonryLayoutOptions) {
    const { width, columnWidth, columnMinNum = 1 } = opt;
    let colCount = Math.floor(width / columnWidth);
    let colAdjustWidth = columnWidth
    if (colCount < columnMinNum) {
      colAdjustWidth = Math.floor(width / columnMinNum);
      colCount = columnMinNum
    }
    return {
      colCount,
      colWidth: colAdjustWidth
    };
  }

}

export const masonryLayout = new MasonryLayout()