import { useEffect, useState } from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";

import OrderForm from "../Choose Item Form/OrderForm";
import ViewOrder from "../Order/ViewOrder";
import { MENU_ITEMS } from "./Menu Items/MenuItems";

function Menu() {
	let [selectedItem, setSelectedItem] = useState(null);
	const [prices, setPrices] = useState([]);
	const [orderItems, setOrderItems] = useState([]);
	const [show, setShow] = useState(false);
	const [filter, setFilter] = useState("");
	// const [total, setTotal] = useState(0);

	// Conjures up buttons for each menu item
	const buttons = MENU_ITEMS.filter((item) =>
		filter ? item.type.toLowerCase() === filter : item
	).map((item, index) => (
		<div className="mb-1 mt-1" key={index}>
			<Button
				onClick={() => viewFoodDetails(item)}
				variant="outline-secondary"
				className="menu-item-button"
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

	// Displays a modal for a specific instance of a menu item listing its details
	function viewFoodDetails(item) {
		setShow(true);
		setSelectedItem(item);
	}

	function addToOrder() {
		setShow(false);
		setPrices([...prices, selectedItem.price]);
		setOrderItems([...orderItems, selectedItem]);
	}

	function calcOrderTotal() {
		const total = prices.reduce((a, b) => a + b, 0);
		return total.toFixed(2);
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

	return (
		<div className="full-app">
			<Navbar className="nav-bar" bg="light" expand="lg" fixed="top">
				<div className="menu-categories">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#" onClick={() => setFilter("")}>
								All Items
							</Nav.Link>
							<Nav.Link
								href="#"
								onClick={() => setFilter("entree")}
							>
								Entrees
							</Nav.Link>
							<Nav.Link
								href="#"
								onClick={() => setFilter("dessert")}
							>
								Desserts
							</Nav.Link>
							<Nav.Link
								href="#"
								onClick={() => setFilter("side")}
							>
								Sides
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
				<div className="view-order-button">
					<ViewOrder
						orderItems={orderItems}
						calcOrderTotal={calcOrderTotal}
						setOrderItems={setOrderItems}
						setPrices={setPrices}
					/>
				</div>
			</Navbar>
			<section className="content-body">
				<h2>All Items</h2>

				<div className="menu-buttons">{buttons}</div>
				<OrderForm
					show={show}
					selectedItem={selectedItem}
					addToOrder={addToOrder}
					orderItems={orderItems}
					handleClose={handleClose}
				/>
			</section>
		</div>
	);
}

export default Menu;
