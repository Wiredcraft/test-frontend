import React from 'react';

export default function Loader(props) {
  return <div className="loader">{props.message || 'Loading ...'}</div>;
}
