import React from "react";

function Card({ src, alt }) {
  return <img src={src} alt={alt} className="card" />;
}

export default Card;
