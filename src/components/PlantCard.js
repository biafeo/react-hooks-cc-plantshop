import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const { id, name, image, price, inStock } = plant;
  function handleInStock(e) {
    // const updatedPlant = { ...plant, inStock: e.target.checked };
    // fetch(`http://localhost:6001/plants/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedPlant),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     onUpdatePlant(data);
    //   });
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button onChange={handleInStock} className="primary">
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
