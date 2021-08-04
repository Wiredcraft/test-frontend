import React from 'react';
import { useContainer } from 'unstated-next';
import Image from './Image';
import styles from './index.module.less';
import ImageContainer from '../../store/ImageContainer';

function ImageLayout () {
  const { images } = useContainer(ImageContainer);
  
  return (
    <div className={styles.imageLayout}>
      {images.map(({ src, _id }) => {
        return (
          <Image
            src={src}
            key={_id}
          />
        );
      })}
    </div>
  );
}

export default ImageLayout;
