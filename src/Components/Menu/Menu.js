import Button from "react-bootstrap/Button";

function Menu() {
  const menuItems = {
    name: "spaghetti",
    description: "Pciriole spirali tortellini conchiglioni lumache.",
    price: "$11.50",
    img: "#",
  };

  return (
    <section className="menu-buttons">
      <h2>All Items</h2>
      <div className="mb-4 mt-4">
        <Button variant="outline-secondary" className="menu-item" size="lg">
          <div className="button-right">
            <div className="card-header">
              <span className="menu-item-name">Spaghetti</span>
            </div>
            <div className="menu-item-description">
              <span>
                Pciriole spirali tortellini conchiglioni lumachevbkjbvesjkef
                seik wgfuwekgfkesfgelwj,fgesjf,sjzkfgc sfgehskjfm skjmzd.
              </span>
            </div>
            <div className="price">
              <span className="item-price">$12.00</span>
            </div>
          </div>
          <img
            className="item-img"
            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </Button>
      </div>
    </section>
  );
}

export default Menu;
