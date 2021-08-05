import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useContainer } from 'unstated-next';
import Image from './Image';
import styles from './index.module.less';
import ImageContainer from '../../store/ImageContainer';
import { calcNodeStyle, getContainerWidth } from '../../common/uitils';
import Buoy from './Buoy';
import useResize from '../../hooks/useResize';

const NODE_WIDTH = 200;

function ImageLayout () {
  const { images } = useContainer(ImageContainer);
  const [containerWidth, setContainerWidth]= useState(1440);
  const containerRef = useRef(null);

  const reCalcContainerWidth = () => {
    const container = window.getComputedStyle(containerRef.current);
    setContainerWidth(getContainerWidth(container.width.slice(0, -2)));
  }

  useEffect(() => {
    reCalcContainerWidth
  }, []);

  useResize({ onResize: reCalcContainerWidth })


  return (
    <div className={styles.imageLayout} ref={containerRef} >
      <div className={styles.imageContainer} style={{ width: `${containerWidth}px` }}>
        {images.map((image, idx) => {
          const nodeStyle = calcNodeStyle({
            nodeWidth : NODE_WIDTH,
            nodeIndex: idx,
            images,
            currentImage: image,
            containerWidth
          });

          return (
            <Fragment key={image._id}>
              <Image
                src={image.src}
                {...nodeStyle}
              />
              {idx === images.length - 1 && <Buoy style={{ top: nodeStyle.top }}/>}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ImageLayout;
