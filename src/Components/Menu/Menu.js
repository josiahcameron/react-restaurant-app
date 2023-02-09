import { useState } from "react";
import Button from "react-bootstrap/Button";
import OrderForm from "../Choose Item Form/OrderForm";
import ViewOrder from "../Order/ViewOrder";
import { MENU_ITEMS } from "./Menu Items/MenuItems";

function Menu({}) {
  let [selectedItem, setSelectedItem] = useState(MENU_ITEMS[1]);
  const [orderItems, setOrderItems] = useState([]);
  const [show, setShow] = useState(false);

  const buttons = MENU_ITEMS.map((item, index) => (
    <div className="mb-1 mt-1" key={index}>
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
            <span className="item-price" type="number" step="any">
              ${item.price}
            </span>
          </div>
        </div>
        <img className="item-img" src={item.img} />
      </Button>
    </div>
  ));

  const addItem = (item) => {
    setOrderItems([...orderItems, item]);
    if (orderItems.length > 0) {
      subTotal(orderItems);
    }
  };

  function subTotal() {
    const prices = orderItems.map((item) => item.price);
    const subtotal = prices.reduce((total, current) => {
      return total + current;
    });
    console.log(subtotal);
  }

  const showForm = (item) => {
    setShow(true);
    setSelectedItem(item);
  };

  // function subTotal() {
  //   const prices = orderList.filter((item) => item.price.parsefloat());
  //   const subtotal = prices.reduce((total, current) => {
  //     return total + current;
  //   });
  //   console.log(subtotal);
  // }

  return (
    <section className="content-body">
      <h2>All Items</h2>
      <ViewOrder orderItems={orderItems} />
      <div className="menu-buttons">{buttons}</div>
      <OrderForm
        show={show}
        setShow={setShow}
        selectedItem={selectedItem}
        orderItems={orderItems}
        addItem={addItem}
        subTotal={subTotal}
      />
    </section>
  );
}

export default Menu;
