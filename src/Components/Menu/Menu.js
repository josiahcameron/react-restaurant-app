import { useState } from "react";
import Button from "react-bootstrap/Button";
import OrderForm from "../Choose Item Form/OrderForm";
import ViewOrder from "../Order/ViewOrder";
// import MENU_ITEMS from "./Menu Items/MenuItems";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Spaghetti",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    price: "$10.50",
    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "entree",
  },
  {
    id: 2,
    name: "Chicken Alfredo",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    price: "$12.00",
    img: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "entree",
  },
  {
    id: 3,
    name: "Chicken Nuggets",
    description: "Wholesome Classic",
    price: "$5.00",
    img: "",
    type: "entree",
  },
];

function Menu({}) {
  let [selectedItem, setSelectedItem] = useState(MENU_ITEMS[1]);
  const [orderItems, setOrderItems] = useState([]);
  const [show, setShow] = useState(false);

  const buttons = MENU_ITEMS.map((item, index) => (
    <div className="mb-4 mt-4" key={index}>
      <Button
        onClick={() => showForm(item)}
        variant="outline-secondary"
        className="menu-item"
        size="lg"
      >
        <div className="button-right">
          <div className="card-header">
            <span className="menu-item-name">{item.name}</span>
          </div>
          <div className="menu-item-description">
            <span>{item.description}</span>
          </div>
          <div className="price">
            <span className="item-price">{item.price}</span>
          </div>
        </div>
        <img className="item-img" src={item.img} />
      </Button>
    </div>
  ));

  const addItem = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const showForm = (item) => {
    setShow(true);
    setSelectedItem(item);
  };

  return (
    <section className="content-body">
      <h2>All Items</h2>
      <div className="menu-buttons">{buttons}</div>
      <OrderForm
        show={show}
        setShow={setShow}
        selectedItem={selectedItem}
        orderItems={orderItems}
        addItem={addItem}
      />
      <ViewOrder orderItems={orderItems} />
    </section>
  );
}

export default Menu;
