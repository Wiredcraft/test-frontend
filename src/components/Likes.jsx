import React, { useState, useEffect } from 'react';
import ImageContainer from '../components/ImageContainer';
import { useGlobalContext } from '../store/global';
import { getUserLikes } from '../utils/data';

const Likes = () => {
  const { updateImages, openModal, user, searchResults } = useGlobalContext();
  // check if user is logged in, if not prompt them to log in
  const [loggedIn, setLoggedIn] = useState(user ? true : false);
  // get liked images when component mounts
  useEffect(() => {
    const getLikedImages = async (id) => {
      const likes = await getUserLikes(id);
      updateImages(likes.data);
    };
    if (user) {
      setLoggedIn(true);
      getLikedImages(user.id);
    }
  }, [user]);

  return loggedIn ? (
    <ImageContainer images={searchResults} openModal={openModal} />
  ) : (
    <div className="no-login">
      <h2>Register or Log in to start liking images</h2>
    </div>
  );
};

export default Likes;
