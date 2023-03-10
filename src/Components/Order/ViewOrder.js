import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
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
		<li key={nanoid()}>{item.name}</li>
	));

	return (
		<>
			<Button
				onClick={() => handleOpen()}
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
								<ListGroup.Item style={{ fontSize: 15 }}>
									Menu Item: {displayItemHTML}
								</ListGroup.Item>
								<ListGroup.Item>
									Price Total: ${calcOrderTotal()}
								</ListGroup.Item>

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
