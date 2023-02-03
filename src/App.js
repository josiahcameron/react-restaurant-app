import "./App.css";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'



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
    <Button variant="primary" size="sm">
      Large button
      <Image
        src=
        "https://www.publicdomainpictures.net/pictures/20000/nahled/spaghetti-bolognese-11291665127QGd.jpg"
      className="w-25 p-3" />
    </Button>
  </div>
</>
)
}




function App() {
  return (
      <div>
          <Menu />
      </div>
//     // <Nav className="Menu"
//     //   activeKey="/home"
//     //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//     // >
//     //   <Nav.Item>
//     //     <Nav.Link href="/home">All Items</Nav.Link>
//     //   </Nav.Item>
//     //   <Nav.Item>
//     //     <Nav.Link eventKey="link-1">Entrees</Nav.Link>
//     //   </Nav.Item>
//     //   <Nav.Item>
//     //     <Nav.Link eventKey="link-2">Desserts</Nav.Link>
//     //   </Nav.Item>
//     //   <Nav.Item>
//     //   <Nav.Link eventKey="link-3">View Order</Nav.Link>
//     //   </Nav.Item>
//     // </Nav>
  );
}




export default App;
