import React from 'react';
// import store from '../store';
import './waterfall.scss';
import { css, throttle, getClient } from '../../utils/index'
import { IImageInfo } from '../../interfaces/IImageInfo';

export default class Waterfall extends React.Component {
  public state: any;
  public myNode: React.RefObject<any>;
  public columnWidth = 240;

  constructor(props) {
    super(props);
    this.state = {
      columnCounts: new Array(Math.floor(window.innerWidth / 230)).fill(null),
      imageInfos: []
    }
    this.myNode = React.createRef()
  }

  public handleImageSize(data: IImageInfo[], columns) {
    const step = this.state.columnCounts.length;
    data = data.map(item => {
      let {
        width,
        height
      } = item;
      item.height = height / (width / this.columnWidth);
      item.width = this.columnWidth;
      return item;
    });

    for (let i = 0; i < data.length; i += step) {
      let group = data.slice(i, i + step);

      columns.sort((a, b) => {
        return b.height - a.height;
      });

      group.sort((a, b) => {
        return a.height - b.height;
      });

      group.forEach((item, index) => {
        let {
          height,
          content
        } = item;
        columns[index].height += height;
        columns[index].children.push({
          height,
          content
        })
      });
    }
    return columns;
  }

  private lazyImg(lazyImageBox) {
    let img = lazyImageBox.querySelector('img'),
      trueImg = img.getAttribute('data-image');
    img.src = trueImg;
    img.onload = function () {
      css(img, 'opacity', 1);
    };
    img.removeAttribute('data-image');
    lazyImageBox.setAttribute('isLoad', 'true');
  }

  private lazyFunc() {
    let winH = getClient().height;
    let lazyImageBoxs = Array.from(document.querySelectorAll('.lazyImageBox'));
    lazyImageBoxs.forEach(lazyImageBox => {
      let isLoad = lazyImageBox.getAttribute('isLoad');
      if (isLoad) return;

      /*
      let B = utils.offset(lazyImageBox).top + lazyImageBox.offsetHeight,
          A = winH + document.documentElement.scrollTop;
      if (B <= A) {
          lazyImg(lazyImageBox);
      } */

      let {
        bottom
      } = lazyImageBox.getBoundingClientRect();
      if (bottom <= winH) {
        this.lazyImg(lazyImageBox);
      }
    });
  }

  private fetchAndHandleData() {
    const url = 'http://localhost:8000'
    fetch(url).then(response => response.json())
      .then(data => {
        this.handleData(data.data as IImageInfo[]);
      })
      .catch(e => console.log("error", e));
  }

  private handleData(data:IImageInfo[]) {
    let elements = [...this.myNode.current.children]
    const columns = elements.map((node) => {
      return {
        height: 0,
        node,
        children: []
      }
    });
    this.setState({
      imageInfos: this.handleImageSize(data, columns)
    })
  }

  public componentDidMount() {
    this.fetchAndHandleData();

    setTimeout(() => {
      this.lazyFunc()
    }, 500);
    window.addEventListener('scroll', throttle(this.lazyFunc.bind(this), 500))
  }

  public render() {
    return (
      <div className="container clear" ref={this.myNode}>
        {
          this.state.columnCounts.map((column, index) => {
            return (
              <div className="column" key={index} style={{ width: this.columnWidth }}>
                {
                  this.state.imageInfos[index]?.children.map((item, index) => {
                    return (
                      <div className="card" key={index}>
                        <div className="lazyImageBox" style={{ height: item.height }}>
                          <img src="" alt="" data-image={item.content} />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}
