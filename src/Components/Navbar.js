import { Link, NavLink } from "react-router-dom";
import Socials from "./Socials";

const Navbar = () => {
	const width = window.screen.width;
	const handleHamburger = () => {
		let navlinks = document.querySelector(".navlinks");
		let navaside = document.querySelector(".nav-aside");
		let navasideh1 = document.querySelector(".socials-hi-main");
		let navbar = document.querySelector("nav");
		let hamburger = document.querySelector(".hamburger");
		let hamburgerClose = document.querySelector(".hamburger-close");
		let first = document.querySelector(".first-child");
		let navcontent = document.querySelector(".nav-content");
		let active = document.querySelector(".active");

		if (width > 900) {
			navbar.classList.add("hamburger-page");
			navlinks.style.display = "flex";
			navlinks.style.marginLeft = "0";
			navlinks.classList.add("hamburger-page-navlinks");
			first.style.display = "block";
			for (let i = 0; i < 4; i++) {
				navlinks.children[i].classList.add("hamburger-page-navlinks-children");
			}
			navaside.style.display = "block";
			navcontent.classList.add("nav-content-active");
			hamburger.style.display = "none";
			hamburgerClose.style.display = "block";
			active.classList.add("active-hamburger");
			for (let i = 0; i < navlinks.children.length; i++) {
				navlinks.children[i].onmouseover = () => {
					navlinks.children[i].classList.add("active-hamburger");
				};
				navlinks.children[i].onmouseleave = () => {
					navlinks.children[i].classList.remove("active-hamburger");
				};
			}
		} else {
			navbar.classList.add("nav-height");
			navasideh1.style.display = "block";
			navlinks.style.display = "block";
			hamburger.style.display = "none";
			hamburgerClose.style.display = "block";
		}
		
	};
	const handleHamburgerClose = () => {
		let navlinks = document.querySelector(".navlinks");
		for (let i = 0; i < 4; i++) {
			navlinks.children[i].onmouseover = () => {
				navlinks.children[i].classList.remove("active-hamburger");
			};
		}
		let navaside = document.querySelector(".nav-aside");
		let navasideh1 = document.querySelector(".socials-hi-main");
		let navbar = document.querySelector("nav");
		let hamburger = document.querySelector(".hamburger");
		let hamburgerClose = document.querySelector(".hamburger-close");
		let first = document.querySelector(".first-child");
		let navcontent = document.querySelector(".nav-content");
		let active = document.querySelector(".active");
		hamburger.style.display = "block";
		hamburgerClose.style.display = "none";
		if (width > 1000) {
			navbar.classList.remove("hamburger-page");
			navlinks.style.display = "flex";
			navlinks.style.marginLeft = "auto";
			navlinks.classList.remove("hamburger-page-navlinks");
			first.style.display = "none";
			for (let i = 0; i < 4; i++) {
				navlinks.children[i].classList.remove(
					"hamburger-page-navlinks-children"
				);
			}
			navaside.style.display = "none";
			navcontent.classList.add("nav-content-active");
			active.classList.remove("active-hamburger");
		} else {
			navasideh1.style.display = "none";
			navlinks.style.display = "none";
			navbar.classList.remove("nav-height");
		}
	};
	window.onresize = () => {
		if (width > 900) {
			window.location.reload();
		}
	};
	return (
		<nav>
			<div className="nav-header">
				<div className="hamburger">
					<div onClick={handleHamburger}>
						<div className="top">
							<span>•</span>
							<span className="hamburger-hidden">•</span>
							<span>•</span>
						</div>
						<div className="middle">
							<span className="hamburger-hidden">•</span>
							<span>•</span>
							<span className="hamburger-hidden">•</span>
						</div>
						<div className="bottom">
							<span>•</span>
							<span className="hamburger-hidden">•</span>
							<span>•</span>
						</div>
					</div>
				</div>
				<div className="hamburger hamburger-close">
					<div onClick={handleHamburgerClose}>
						<div className="top">
							<span>•</span>
							<span className="hamburger-hidden">•</span>
							<span>•</span>
						</div>
						<div className="middle">
							<span className="hamburger-hidden">•</span>
							<span>•</span>
							<span className="hamburger-hidden">•</span>
						</div>
						<div className="bottom">
							<span>•</span>
							<span className="hamburger-hidden">•</span>
							<span>•</span>
						</div>
					</div>
				</div>
				<Link to={"/home"}>
					<h1>Qoreeb</h1>
				</Link>
			</div>
			<div className="nav-content">
				<ul className="navlinks">
					<li className="first-child">
						<NavLink to={`/home`}>Home</NavLink>
					</li>
					<li>
						<NavLink to={`/works`}>Work</NavLink>
					</li>
					<li>
						<NavLink to={`/about`}>About</NavLink>
					</li>
					<li>
						<NavLink to={`/contact`}>Contact</NavLink>
					</li>
				</ul>
				<div className="nav-aside">
					<Socials />
				</div>
			</div>
			<div className="socials-hi-main">
				<h4>Say Hi!</h4>
				<p>
					<a href="mailto:qoribullahabubakar@gmail.com" className="myemail">
						qoribullahabubakar@gmail.com
					</a>
				</p>
			</div>
		</nav>
	);
};

export default Navbar;
