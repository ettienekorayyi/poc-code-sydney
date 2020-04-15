import React from "react";
import "./card.css";
import PlaceHolderImage from "../../assets/placeholder_image.png";

const Card = ({ id, fullName, title, photo }) => {
  const photoURL = `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png`;

  return (
    <div className="card">
      {/* <img src={photo ? photoURL : PlaceHolderImage} alt="user-profile" /> */}
      <div>{fullName}</div>
      <div>{title}</div>
      <button>More Info</button>
    </div>
  );
};

export default Card;
