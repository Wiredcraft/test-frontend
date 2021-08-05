import React, { Fragment, useRef, useState } from 'react';
import { useContainer } from 'unstated-next';
import Image from './Image';
import styles from './index.module.less';
import ImageContainer from '../../store/ImageContainer';
import { calcNodeStyle } from '../../common/uitils';
import Buoy from './Buoy';

const LAYOUT_CONTAINER_ID = 'layout-container';

function ImageLayout () {
  const { images } = useContainer(ImageContainer);
  const [nodeWidth, setNodeWidth]= useState(200);
  const container = document.getElementById(LAYOUT_CONTAINER_ID);


  return (
    <div className={styles.imageLayout} id={LAYOUT_CONTAINER_ID}>
      {images.map((image, idx) => {
        const nodeStyle = calcNodeStyle({
          nodeWidth,
          nodeIndex: idx,
          images,
          currentImage: image,
          container
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
  );
}

export default ImageLayout;
