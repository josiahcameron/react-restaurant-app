import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function ViewOrder({ orderItems }) {
  // The default value on open will be false
  const [open, setOpen] = useState(false);

  const [order, setOrder] = useState([]);
  const [custname, setCustName] = useState("");
  const [specialInstruction, setSpecialInstructions] = useState("");

  const orderList = [...orderItems];

  const confirmOrder = (e) => {
    e.preventDefault();
    setOrder([custname, orderList, specialInstruction]);
    console.log(order);

    window.localStorage.setItem("order", JSON.stringify(order));
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="view-order-button"
      >
        View Order
      </Button>
      <div>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text" className="order-form">
            <Card style={{ width: "18rem" }}>
              <Card.Header>Your Order: </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Menu Item: </ListGroup.Item>
                <ListGroup.Item>Price Total</ListGroup.Item>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Special Instructions</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Put Special Requests Here (Extra Utensils, Parmesan, Etc.)"
                    value={specialInstruction}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                  />
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter Name Here"
                    value={custname}
                    onChange={(e) => setCustName(e.target.value)}
                  />
                </Form.Group>
              </ListGroup>
            </Card>
            <Button variant="primary" onClick={confirmOrder}>
              Confirm Order
            </Button>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default ViewOrder;
