import { Link, NavLink, useLocation } from 'react-router-dom';
import Socials from './Socials';
import resume from '../assets/Resume.pdf';

const Navbar = () => {
	const { pathname } = useLocation();
	const width = window.innerWidth;
	const handleHamburger = () => {
		let navlinks = document.querySelector('.navlinks');
		let navaside = document.querySelector('.nav-aside');
		let navasideh1 = document.querySelector('.socials-hi-main');
		let navbar = document.querySelector('nav');
		let hamburger = document.querySelector('.hamburger');
		let hamburgerClose = document.querySelector('.hamburger-close');
		let first = document.querySelector('.first-child');
		let navcontent = document.querySelector('.nav-content');
		let active = document.querySelector('.active');

		navbar.style.backgroundColor = document.body.style.backgroundColor;
		active.classList.add('active-hamburger');
		if (width > 1000) {
			navbar.classList.add('hamburger-page');
			for (let i = 0; i < navlinks.children.length; i++) {
				navlinks.children[i].classList.add('hamburger-page-navlinks-children');
			}
			navlinks.style.display = 'flex';
			navlinks.style.marginLeft = '0';
			navlinks.classList.add('hamburger-page-navlinks');
			first.style.display = 'block';
			navaside.classList.add('hamburger-page-nav-aside');
			navcontent.classList.add('nav-content-active');
			hamburger.style.display = 'none';
			hamburgerClose.style.display = 'block';
			for (let i = 0; i < navlinks.children.length; i++) {
				navlinks.children[i].onmouseover = () => {
					navlinks.children[i].classList.add('active-hamburger');
				};
				navlinks.children[i].onmouseleave = () => {
					navlinks.children[i].classList.remove('active-hamburger');
				};
			}
		} else {
			navbar.classList.add('nav-height');
			navasideh1.style.display = 'block';
			navlinks.style.display = 'block';
			hamburger.style.display = 'none';
			hamburgerClose.style.display = 'block';
		}
	};
	const handleHamburgerClose = () => {
		let navlinks = document.querySelector('.navlinks');
		for (let i = 0; i < navlinks.children.length; i++) {
			navlinks.children[i].onmouseover = () => {
				navlinks.children[i].classList.remove('active-hamburger');
			};
		}
		let navaside = document.querySelector('.nav-aside');
		let navasideh1 = document.querySelector('.socials-hi-main');
		let navbar = document.querySelector('nav');
		let hamburger = document.querySelector('.hamburger');
		let hamburgerClose = document.querySelector('.hamburger-close');
		let first = document.querySelector('.first-child');
		let navcontent = document.querySelector('.nav-content');
		let active = document.querySelector('.active');

		hamburger.style.display = 'block';
		hamburgerClose.style.display = 'none';
		if (width > 1000) {
			navbar.classList.remove('hamburger-page');
			navlinks.style.display = 'flex';
			navlinks.style.marginLeft = 'auto';
			navlinks.classList.remove('hamburger-page-navlinks');
			first.style.display = 'none';
			for (let i = 0; i < navlinks.children.length; i++) {
				navlinks.children[i].classList.remove(
					'hamburger-page-navlinks-children'
				);
			}
			navaside.classList.remove('hamburger-page-nav-aside');
			navcontent.classList.add('nav-content-active');
			active.classList.remove('active-hamburger');
		} else {
			navasideh1.style.display = 'none';
			navlinks.style.display = 'none';
			navbar.classList.remove('nav-height');
		}
	};
	document.body.addEventListener('click', () => {
		let navbar = document.querySelector('nav');
		navbar.style.backgroundColor = document.body.style.backgroundColor;
	});
	const handleScroll = () => {
		let navlinks = document.querySelector('.navlinks');
		for (let i = 0; i < navlinks.children.length; i++) {
			navlinks.children[i].onmouseover = () => {
				navlinks.children[i].classList.remove('active-hamburger');
			};
		}
		let project = document.querySelector('.projects-props');
		let navaside = document.querySelector('.nav-aside');
		let navbar = document.querySelector('nav');
		let hamburger = document.querySelector('.hamburger');
		let hamburgerClose = document.querySelector('.hamburger-close');
		let first = document.querySelector('.first-child');
		let navcontent = document.querySelector('.nav-content');
		let active = document.querySelector('.active');
		if (navbar.classList.contains('hamburger-page')) {
			navbar.classList.remove('hamburger-page');
			navlinks.style.display = 'flex';
			navlinks.style.marginLeft = 'auto';
			navlinks.classList.remove('hamburger-page-navlinks');
			first.style.display = 'none';
			for (let i = 0; i < navlinks.children.length; i++) {
				navlinks.children[i].classList.remove(
					'hamburger-page-navlinks-children'
				);
			}
			navaside.style.display = 'none';
			navcontent.classList.add('nav-content-active');
			active.classList.remove('active-hamburger');
		}
		hamburger.style.display = 'block';
		hamburgerClose.style.display = 'none';
		window.scrollTo(0, 1000);
		if (pathname === '/home') project.classList.add('project-animate');

		if (width <= 1000) {
			let navasideh1 = document.querySelector('.socials-hi-main');
			let navlinks = document.querySelector('.navlinks');
			let navbar = document.querySelector('nav');
			navasideh1.style.display = 'none';
			navlinks.style.display = 'none';
			navbar.classList.remove('nav-height');
			window.scrollTo(0, 370);
		}
	};
	window.onscroll = () => {
		let project = document.querySelector('.projects-props');
		if (window.scrollY === 0 && pathname === '/home')
			project.classList.remove('project-animate');
	};
	// window.onresize = () => {
	// 	if (width > 900) {
	// 		window.location.reload();
	// 	}
	// };
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
				<Link to={'/home'}>
					<h1>Qoreeb</h1>
				</Link>
			</div>
			<div className="nav-content">
				<ul className="navlinks">
					<li className="first-child">
						<NavLink to={`/home`}>Home</NavLink>
					</li>
					<li>
						<Link to={'/home'} onClick={handleScroll}>
							Works
						</Link>
					</li>
					<li>
						<a href={resume} download="Qoreeb's Resume">
							Resume
						</a>
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
						info@qoreeb.design
					</a>
				</p>
			</div>
		</nav>
	);
};

export default Navbar;
