import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../../store/global';
import { addLike, removeLike, getUserLikes } from '../../utils/data';

export default function ImageZoom(props) {
  const { user, likes } = useGlobalContext();
  const { src } = props;
  const [isLiked, setIsLiked] = useState(likes.find((l) => l.image === src));

  const handleUnlike = () => {
    const thisLike = isLiked;
    removeLike(thisLike.id);
    getUserLikes(user.id);
  };

  const handleLike = () => {
    addLike(user.id, src);
    getUserLikes(user.id);
  };

  return (
    <div className="modal__inner zoom" onClick={(e) => e.stopPropagation()}>
      <img className="zoom__image" src={src} alt={src} />
      <FontAwesomeIcon
        className={`zoom__icon ${isLiked ? 'zoom__icon--selected' : ''}`}
        icon={faHeart}
        onClick={isLiked ? handleUnlike : handleLike}
      />
    </div>
  );
}
