import React from "react";

function ToyForm({handleAddNewToy, handleToyName, handleToyImage, toyImage, toyName}) {

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleAddNewToy(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {toyName}
          onChange={(e) => handleToyName(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {toyImage}
          onChange={(e) => handleToyImage(e)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
