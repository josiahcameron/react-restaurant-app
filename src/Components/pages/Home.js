import { NavLink } from "react-router-dom";

function LandingPage() {
	const landingPage = document.getElementById("landing-page");

	Array.from(document.getElementsByClassName("page-item")).forEach(
		(item, index) => {
			item.onmouseover = () => {
				landingPage.dataset.activeIndex = index;
			};
		}
	);

	return (
		<div id="landing-page">
			<div id="page-items">
				<NavLink to="Reservation" className="page-item">
					Make a Reservation
				</NavLink>
				<NavLink to="/menu" className="page-item">
					Menu
				</NavLink>
				<NavLink to="/" className="page-item">
					About
				</NavLink>
				<NavLink to="/" className="page-item">
					Contact Us
				</NavLink>
			</div>
			<div id="landing-page-pattern"></div>
			<div id="landing-page-image"></div>
		</div>
	);
}
export default LandingPage;
