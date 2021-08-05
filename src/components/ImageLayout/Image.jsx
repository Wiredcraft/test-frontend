import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Image.module.less';

function Image (props) {
  const {
    src,
    className,
    top,
    left,
    width,
    height
  } = props;

  const [showImg, setShowImg] = useState(false);

  const style = {
    top,
    left,
    width,
    height
  };
  return (
    <div className={styles.imageContainer} style={style}>
      <img
        src={src}
        onLoad={() => setShowImg(true)}
        className={cx({
          [styles.image]: true, 
          [styles.hidden]: !showImg,
          [className]: !!className
        })}
      />
     {!showImg && <div className={styles.placeholder} style={style}></div>}
    </div>
  )
  
}


export default Image;