import { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock(!inStock);
  }

  return (
    <div className="card" data-testid="plant-item">
      <img
        className="plant-image"
        src={plant.image}
        alt={plant.name}
      />

      <div className="plant-details">
        <h4>{plant.name}</h4>

        <p>Price: {plant.price}</p>

        <button
          className={inStock ? "primary" : "secondary"}
          onClick={handleClick}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}

export default PlantCard;