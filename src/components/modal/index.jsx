import React from 'react';
import { useGlobalContext } from '../../store/global';
import AuthFail from './AuthFail';
import ImageZoom from './ImageZoom';

const Modal = () => {
  const { modalOpen, modalType, closeModal, zoomedImage } = useGlobalContext();
  return modalOpen ? (
    <div className={`modal ${modalType}`} onClick={closeModal}>
      {modalType === 'image-zoom' && <ImageZoom src={zoomedImage} closeModal={closeModal} />}
      {modalType === 'auth-fail' && <AuthFail src={zoomedImage} closeModal={closeModal} />}
    </div>
  ) : null;
};

export default Modal;
