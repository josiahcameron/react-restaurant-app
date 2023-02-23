import { useState } from "react";
import spaghetti from "./../../../assets/images/spaghetti.jpg";
import chicken_alfredo from "./../../../assets/images/chicken_alfredo.jpg";
import strawberry_gelato from "./../../../assets/images/strawberry_gelato.jpg";
import tiramisu from "./../../../assets/images/tiramisu.jpg";
import wild_berry_tart from "./../../../assets/images/wild_berry_tart.jpg";
import side_salad from "./../../../assets/images/side_salad.jpg";
import garlic_bread from "./../../../assets/images/garlic_bread.jpg";

export const MENU_ITEMS = [
	{
		name: "Spaghetti",
		description: "Pciriole spirali tortellini conchiglioni lumache.",
		// prettier-ignore
		price: 10.50,
		img: spaghetti,
		type: "entree",
	},
	{
		name: "Chicken Alfredo",
		description: "Pciriole spirali tortellini conchiglioni lumache.",
		// prettier-ignore
		price: 12.00,
		img: chicken_alfredo,
		type: "entree",
	},
	{
		name: "Strawberry Gelato",
		description:
			"Decadent smoothness that encapsulates and enhance the purity of our locally-sourced strawberries",
		// prettier-ignore
		price: 3.00,
		img: strawberry_gelato,
		type: "dessert",
	},
	{
		name: "Tiramisu",
		description: "Wholesome Classic",
		// prettier-ignore
		price: 4.00,
		img: tiramisu,
		type: "dessert",
	},
	{
		name: "Wild Berry Tart",
		description: "Wholesome Classic",
		// prettier-ignore
		price: 5.00,
		img: wild_berry_tart,
		type: "entree",
	},
	{
		name: "Caprese Side Salad",
		description: "Wholesome Classic",
		// prettier-ignore
		price: 5.00,
		img: side_salad,
		type: "side",
	},
	{
		name: "Garlic Bread",
		description:
			"Garlic bread is the one true bread, banana bread is blasphemy.",
		// prettier-ignore
		price: 1.50,
		img: garlic_bread,
		type: "side",
	},
];
