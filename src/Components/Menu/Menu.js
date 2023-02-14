import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import OrderForm from "../Choose Item Form/OrderForm";
import ViewOrder from "../Order/ViewOrder";
import { MENU_ITEMS } from "./Menu Items/MenuItems";

function Menu() {
  let [selectedItem, setSelectedItem] = useState(null);
  const [prices, setPrices] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [show, setShow] = useState(false);
  // const [total, setTotal] = useState(0);

  const buttons = MENU_ITEMS.map((item, index) => (
    <div className="mb-1 mt-1" key={index}>
      <Button
        onClick={() => viewFoodDetails(item)}
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
            <span className="item-price" type="number">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
        <img className="item-img" src={item.img} alt="" />
      </Button>
    </div>
  ));

  function viewFoodDetails(item) {
    setShow(true);
    setSelectedItem(item);
  }

  function addToOrder() {
    setShow(false);
    setPrices([...prices, selectedItem.price]);
   setOrderItems([...orderItems, selectedItem])
  }

  function calcOrderTotal() {
    const total = prices.reduce((a, b) => a + b, 0);
    return total;

  }

  const addItem = (item) => {
    // if (orderItems.length > 0) {
    //   const test = subTotal(orderItems);
    //   console.log(test)
    // }
  };

  function subTotal(selectedItem) {
    const prices = selectedItem?.map((item) => item.price);
    // console.log(selectedItem)
    const subtotal = prices?.reduce((total, current) => {
      return total + current;
    });

    return subtotal;
  }

  const showForm = (item) => {
    setShow(true);
    setSelectedItem([...selectedItem, item]);
    const prices = selectedItem.map((item) => item.price);
    const subtotal = prices.reduce((total, current) => {
      return total + current;
    });
  };

  const handleClose = () => {
    setShow(false);
    setSelectedItem(null);
  };

  // function subTotal() {
  //   const prices = orderList.filter((item) => item.price.parsefloat());
  //   const subtotal = prices.reduce((total, current) => {
  //     return total + current;
  //   });
  //   console.log(subtotal);
  // }

  // console.log(selectedItem)
  // console.log({total})
  console.log({ prices });

  return (
    <section className="content-body">
      <h2>All Items</h2>
      <ViewOrder
        orderItems={orderItems}
        calcOrderTotal={calcOrderTotal}
      />
      <div className="menu-buttons">{buttons}</div>
      <OrderForm
        show={show}
        selectedItem={selectedItem}
        addToOrder={addToOrder}
        handleClose={handleClose}
      />
    </section>
  );
}

export default Menu;
