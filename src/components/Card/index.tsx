// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './index.css';
import { pictureCard } from '../../data.d';

const Card: React.FC<pictureCard> = (props) => {
  return (
    <div key={props.id} className="card">
      <img src={props.src}  className="img-thumbnail wc-picture" />
    </div>
  );
};

export default Card;
