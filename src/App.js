import "./App.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css";







function Menu(){
const menuItems = 
{ 
  name: "spaghetti", 
  description: "Pciriole spirali tortellini conchiglioni lumache.", 
  price: "$11.50", 
  img: "#"};

return(
  <>
  <div className="mb-2">
  <Button variant="outline-secondary" className="menu-item" size="md" >
    <div className="card-header">
      <span className="menu-item-name">Spaghetti</span>
    </div>
    <div>
    <span className="menu-item-description">Pciriole spirali tortellini conchiglioni lumache.</span>
    </div>
    <div className="price">
    <span className="item-price">$12.00</span>
    </div>
    <img src="/src/Assets/images/spaghetti.png" />
    </Button>
  </div>
</>
)
}

function OrderForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ViewOrder() {
  const [open, setOpen] = useState();

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width" >
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

function ChooseMenu() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">All Items</Nav.Link>
            <Nav.Link href="#">Entrees</Nav.Link>
            <Nav.Link href="#">Desserts</Nav.Link>
            <Nav.Link href="#">Sides</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


function App() {
  return (
    
    <div>
    <ChooseMenu />
    <Menu />;
    <OrderForm />;
    <ViewOrder />;
    </div>
  );
}




export default App;
