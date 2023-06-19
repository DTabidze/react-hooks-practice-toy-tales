import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = ' http://localhost:3000/toys'

function App() {
  const [number,setNumber] = useState(0)

  useEffect ( () => {
    fetch (API)
    .then (response => response.json())
    .then (toysData => setToys(toysData))
  }, [number])

  const [showForm, setShowForm] = useState(false);
  const [toys,setToys] = useState([])
  const [toyName,setToyName] = useState('')
  const [toyImage,setToyImage] = useState('')


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy (e) {
    e.preventDefault()
    console.log (toyName,toyImage)
    fetch (API ,{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0
      })
    })
    .then (response => response.json())
    .then (data => setNumber(number + 1))
  
  }

  function handleToyName (e) {
    setToyName(e.target.value)
  }

  function handleToyImage (e) {
    setToyImage(e.target.value)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyName={toyName} toyImage={toyImage} handleToyName={handleToyName} handleToyImage={handleToyImage} handleAddNewToy={handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setNumber={setNumber} API={API} number={number}/>
    </>
  );
}

export default App;
