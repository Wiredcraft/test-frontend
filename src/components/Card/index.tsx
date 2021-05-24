import React, { useState, useEffect } from 'react';
import { pictureCard } from '../../data.d';

const Card: React.FC<pictureCard> = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [bgColor, setBgColor] = useState('');

  const getPlaceholderSize = () => {
    const numberPattern = /\d+/g;
    //customer function based on https://picsum.photos/240/392?random=286
    if(props.src){
      const size = props.src.match(numberPattern);
      if(size){
        const width = Number(size[0]);
        const height = Number(size[1]);
        setPaddingBottom((height/width)*100);
      }
    }
  };

  const getPlaceholderBgColor = () => {
    const colors = ['#36413E','#D7D6D6', '#BEB2C8', '#5E8C61', '#A5C4D4', '#F5DD90', '#F7E1D7', '#A49E8D'];
    const bgColor = colors[Math.floor(Math.random()*colors.length)];
    setBgColor(bgColor);
  };

  const onLoadDone = () => {
    setIsLoading(true);
  };

  const style = {
    paddingBottom: paddingBottom + '%',
    backgroundColor: bgColor,
  };

  useEffect(() => {
    setIsLoading(true);
    getPlaceholderSize();
    getPlaceholderBgColor();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div key={props._id} className="card wc-card">
      <div className="wc-image-placeholder" style={isLoading ? style : {}}>
        <img
          src={props.src}
          className="card-img-top img-thumbnail wc-picture"
          style={{ backgroundColor: bgColor }}
          alt={props.name}
          onLoad={onLoadDone}
        />
      </div>
    </div>
  );
};

export default Card;
