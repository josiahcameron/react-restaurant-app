import { useEffect, useState } from "react";
import {
	Button,
	Card,
	Collapse,
	ListGroup,
	Form,
	Offcanvas,
} from "react-bootstrap";
import { nanoid } from "nanoid";

function ViewOrder({
	orderItems,
	total,
	calcOrderTotal,
	setOrderItems,
	setPrices,
}) {
	// The default value on open will be false
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(true);

	const [order, setOrder] = useState([]);
	const [custname, setCustName] = useState("");
	const [specialInstructions, setSpecialInstructions] = useState("");
	let displayItem = [];
	let displayItemHTML = [];
	// const [test, setTest] = useState(testing)
	// setTest({custName, orderItems, specialInstructions})

	const confirmOrder = (e) => {
		e.preventDefault();
		const orderInfo = {
			custname: custname,
			orderItems: orderItems,
			specialInstructions: specialInstructions,
		};

		setOrder([custname, [orderItems], specialInstructions]);

		window.localStorage.setItem("order", JSON.stringify(orderInfo));
		setOrder([]);
		setOrderItems([]);
		setCustName("");
		setSpecialInstructions("");
		setPrices([]);
	};

	const handleOpen = () => {
		setOpen(!open);
		displayItem = orderItems.map((item) => item.name);
		const displayItem2 = displayItem.join("\n");
	};
	const orderList = orderItems;

	displayItemHTML = orderItems?.map((item) => (
		<div className="menu-item" key={nanoid()}>
			<p>{item.name}</p>${item.price.toFixed(2)}
		</div>
	));

	return (
		<>
			<Offcanvas
				show={show}
				scroll={true}
				backdrop={false}
				placement="end"
				className="cart"
			>
				<Offcanvas.Body>
					<div id="example-collapse-text" className="order-form">
						<div>
							<h3>Your Order:</h3>
							<ul>
								<li
									className="item-name-list"
									style={{ fontSize: 15 }}
								>
									<h4>Menu Item:</h4> {displayItemHTML}
								</li>
								<li>
									<div className="total-price">
										<p>Price Total:</p>{" "}
										<p>${calcOrderTotal()}</p>
									</div>
								</li>
								<div className="cart-form">
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>
											Special Instructions
										</Form.Label>
										<Form.Control
											as="textarea"
											rows={3}
											placeholder="Put Special Requests Here (Extra Utensils, Parmesan, Etc.)"
											value={specialInstructions}
											onChange={(e) =>
												setSpecialInstructions(
													e.target.value
												)
											}
										/>
										<Form.Label>Your Name</Form.Label>
										<Form.Control
											type="name"
											placeholder="Enter Name Here"
											value={custname}
											onChange={(e) =>
												setCustName(e.target.value)
											}
										/>
									</Form.Group>
									<div className="confirm-order-button-container">
										<Button
											variant="primary"
											onClick={confirmOrder}
											className="rounded-0"
										>
											Confirm Order
										</Button>
									</div>
								</div>
							</ul>
						</div>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default ViewOrder;
