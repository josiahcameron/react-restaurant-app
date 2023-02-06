import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

function ViewOrder({ orders }) {
  // The default value on open will be false
  const [open, setOpen] = useState(false);

  const [custname, setCustName] = useState("");
  const [itemname, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [specialInstruction, setSpecialInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      custname,
      itemname,
      price,
      specialInstruction,
    };
  };
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="view-order-button"
      >
        fly
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card style={{ width: "18rem" }}>
              <Card.Header>Your Order</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Menu Item</ListGroup.Item>
                <ListGroup.Item>Price Total</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default ViewOrder;
