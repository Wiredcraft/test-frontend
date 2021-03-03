import React from 'react';

export default function AuthFail(props) {
  const { closeModal } = props;

  return (
    <div className="modal__inner notification" onClick={(e) => e.stopPropagation()}>
      <h2>Incorrect username or password</h2>
      <button type="" className="" onClick={closeModal}>
        Ok
      </button>
    </div>
  );
}
