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
				<a href="/" className="page-item">
					Make a Reservation
				</a>
				<a href="/" className="page-item">
					Order Here
				</a>
				<a href="/" className="page-item">
					About
				</a>
				<a href="/" className="page-item">
					Contact Us
				</a>
			</div>
			<div id="landing-page-pattern"></div>
			<div id="landing-page-image"></div>
		</div>
	);
}
export default LandingPage;
