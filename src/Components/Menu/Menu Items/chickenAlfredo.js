import { useState } from "react";
import Button from "react-bootstrap/Button";

function ChickenAlfredo() {
  const ChickenAlfredo = {
    name: "Chicken Alfredo",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    price: "$12.00",
    img: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=800",
  };

  return (
    <div className="mb-4 mt-4">
      <Button variant="outline-secondary" className="menu-item" size="lg">
        <div className="button-right">
          <div className="card-header">
            <span className="menu-item-name">{ChickenAlfredo.name}</span>
          </div>
          <div className="menu-item-description">
            <span>{ChickenAlfredo.description}</span>
          </div>
          <div className="price">
            <span className="item-price">{ChickenAlfredo.price}</span>
          </div>
        </div>
        <img className="item-img" src={ChickenAlfredo.img} />
      </Button>
    </div>
  );
}

export default ChickenAlfredo;
