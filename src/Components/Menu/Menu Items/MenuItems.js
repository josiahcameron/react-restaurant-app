import { useState } from "react";

export const MENU_ITEMS = [
  {
    name: "Spaghetti",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    // prettier-ignore
    price: 10.50,
    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "entree",
  },
  {
    name: "Chicken Alfredo",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    // prettier-ignore
    price: 12.00,
    img: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "entree",
  },
  {
    name: "Strawberry Gelato",
    description:
      "Decadent smoothness that encapsulates and enhance the purity of our locally-sourced strawberries",
    // prettier-ignore
    price: 3.00,
    img: "https://images.pexels.com/photos/5060943/pexels-photo-5060943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "dessert",
  },
  {
    name: "Tiramisu",
    description: "Wholesome Classic",
    // prettier-ignore
    price: 4.00,
    img: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "dessert",
  },
  {
    name: "Wild Berry Tart",
    description: "Wholesome Classic",
    // prettier-ignore
    price: 5.00,
    img: "https://images.pexels.com/photos/2693448/pexels-photo-2693448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "entree",
  },
  {
    name: "Caprese Side Salad",
    description: "Wholesome Classic",
    // prettier-ignore
    price: 5.00,
    img: "https://images.pexels.com/photos/13241736/pexels-photo-13241736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "side",
  },
  {
    name: "Garlic Bread",
    description:
      "Garlic bread is the one true bread, banana bread is blasphemy.",
    // prettier-ignore
    price: 1.50,
    img: "https://images.pexels.com/photos/13698106/pexels-photo-13698106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "side",
  },
];
