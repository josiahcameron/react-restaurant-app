import Button from "react-bootstrap/Button";
import Spaghetti from "./Menu Items/spaghetti";
import ChickenAlfredo from "./Menu Items/chickenAlfredo";

function Menu() {
  return (
    <section className="content-body">
      <h2>All Items</h2>
      <div className="menu-buttons">
        <Spaghetti />
        <ChickenAlfredo />
      </div>
    </section>
  );
}

export default Menu;
