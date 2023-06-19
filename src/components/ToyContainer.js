import React from "react";
import ToyCard from "./ToyCard";
import { useState } from "react";

function ToyContainer({toys,setNumber,API,number}) {
  
  function handleLikes(e,id,newLikes) {
    e.preventDefault() 
    fetch (`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then (response => response.json())
    .then (data => setNumber(number + 1) )
  }

  function handleDelete (e,id) {
    e.preventDefault() 
    fetch (`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
    .then (response => response.json())
    .then (data => setNumber(number + 1) )
  }
  

  return (
    <div id="toy-collection">{toys.map (toy => 
      <ToyCard 
        key={toy.id} 
        id={toy.id} 
        name={toy.name} 
        image={toy.image} 
        likes={toy.likes} 
        handleLikes={handleLikes} 
        handleDelete={handleDelete}
      />)}
    </div>
  );
}

export default ToyContainer;
