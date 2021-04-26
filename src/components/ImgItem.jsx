import React from 'react';

const ImgItem = React.memo(({ imgSrc, name }) => {
  return (
    <div className='img-item'>
      <img src={imgSrc} name={name} />
    </div>
  );
});

export default ImgItem;
