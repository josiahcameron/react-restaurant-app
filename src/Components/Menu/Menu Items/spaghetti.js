import { useState } from "react";
import Button from "react-bootstrap/Button";
import OrderForm from "../../Choose Item Form/OrderForm";

function Spaghetti() {
  const Spaghetti = {
    name: "Spaghetti",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    price: "$10.50",
    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
  };

  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(true);
  };

  return (
    <div className="mb-4 mt-4">
      <Button
        onClick={showForm}
        variant="outline-secondary"
        className="menu-item"
        size="lg"
      >
        <div className="button-right">
          <div className="card-header">
            <span className="menu-item-name">{Spaghetti.name}</span>
          </div>
          <div className="menu-item-description">
            <span>{Spaghetti.description}</span>
          </div>
          <div className="price">
            <span className="item-price">{Spaghetti.price}</span>
          </div>
        </div>
        <img className="item-img" src={Spaghetti.img} />
      </Button>
      <OrderForm show={show} setShow={setShow} />
    </div>
  );
}

export default Spaghetti;
