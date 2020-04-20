import React from "react";
import "./card.css";
import PlaceHolderImage from "../../assets/placeholder_image.png";

const Card = ({ id, fullName, title, photo }) => {
  const photoURL = `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png`;

  return (
    <div className="card">
      <img className="card-image" src={photo ? photoURL : PlaceHolderImage} alt="user-profile" />
      <div className="card-fullName">{fullName}</div>
      <div className="card-title">{title}</div>
      <button className="card-button">More Info</button>
    </div>
  );
};

export default Card;
