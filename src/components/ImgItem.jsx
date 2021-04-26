import React from 'react';

const ImgItem = React.memo(({ imgSrc, name }) => {
  return (
    <div className='img-item'>
      <img className='img-item__img' data-imgsrc={imgSrc} name={name} />
    </div>
  );
});

export default ImgItem;
