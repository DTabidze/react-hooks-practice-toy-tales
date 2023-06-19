import React from "react";

function ToyCard({id,name,image,likes,handleLikes,handleDelete}) {

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={(e) => handleLikes(e,id,likes+1)}>Like {"<3"}</button>
      <button className="del-btn" onClick={(e) => handleDelete(e,id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
