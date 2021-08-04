import React from 'react';
import cx from 'classnames';
import styles from './Image.module.less';

function Image ({ src, className }) {

  return (
    <img
      src={src}
      className={cx(styles.image, className)}
    />
  )
}


export default Image;