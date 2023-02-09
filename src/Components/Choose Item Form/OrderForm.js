import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function OrderForm({ show, setShow, selectedItem, addItem, subTotal }) {
  // Show is set to false by default; will be attached to the buttons

  const handleClose = (e) => {
    setShow(false);
  };

  const addToOrder = (e) => {
    addItem(selectedItem);
    setShow(false);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img className="selected-item-img" src="#" />
          <Modal.Title>{selectedItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Description: </Form.Label>
            <Form.Text id="passwordHelpBlock" muted>
              {selectedItem.description}
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addToOrder}>
            Add To Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default OrderForm;
