import React from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import { useGlobalContext } from '../store/global';

export default function Wrapper(props) {
  const { showLoader, loaderMessage } = useGlobalContext();

  return (
    <div className="wrapper">
      <Header />
      {props.children}
      <Modal />
      {showLoader && <Loader message={loaderMessage} />}
    </div>
  );
}
