import "./App.css";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


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
  <Button variant="outline-secondary" className="menu-item" size="md">
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
        <Collapse in={open} dimension="width">
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



function App() {
  return (
      <div>
    <Nav className="Menu"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">All Items</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Entrees</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Desserts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3">View Order</Nav.Link>
      </Nav.Item>
    </Nav>
    <Menu />
    <ViewOrder />
    </div>
  );
}




export default App;
