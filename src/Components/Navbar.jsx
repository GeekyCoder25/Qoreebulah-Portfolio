import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Socials from './Socials';
import { useEffect } from 'react';

const Navbar = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
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
		navbar.style.backgroundColor = document.body.style.backgroundColor;
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
		} else {
			navasideh1.style.display = 'none';
			navlinks.style.display = 'none';
			navbar.classList.remove('nav-height');
		}
	};
	// document.body.addEventListener('load', () => {
	// 	let navbar = document.querySelector('nav');
	// 	navbar.style.backgroundColor = document.body.style.backgroundColor;
	// });
	const handleScroll = () => {
		let project = document.querySelector('.projects-props');
		let navbar = document.querySelector('nav');
		if (
			navbar.classList.contains('hamburger-page') ||
			navbar.classList.contains('nav-height')
		) {
			handleHamburgerClose();
			window.scrollTo(0, 1000);
		}
		if (pathname === '/home' || pathname === '/home/1') {
			setTimeout(() => {
				window.scrollTo(0, 1000);
				project.classList.add('project-animate');
				if (width <= 1000) window.scrollTo(0, 370);
			}, 1);
		} else if (pathname !== '/home') {
			navigate(`/home`);
			setTimeout(() => {
				if (width <= 1000) {
					window.scrollTo(0, 370);
				} else window.scrollTo(0, 1000);
			}, 1);
		}
	};
	window.onscroll = () => {
		let project = document.querySelector('.projects-props');
		let works = document.querySelector('.works-link');
		if (
			(pathname === '/home' || pathname === '/home/1') &&
			(window.scrollY < 100 || window.scrollY > 1500)
		)
			project.classList.remove('project-animate');
		if (
			(pathname === '/home' || pathname === '/home/1') &&
			window.scrollY > 1000 &&
			window.scrollY < 6000
		)
			works.classList.add('active');
		else works.classList.remove('active');
	};
	useEffect(() => {
		const arrow = document.querySelectorAll('.arrow');
		arrow.forEach(a => {
			document.body.style.backgroundColor === 'rgb(255, 255, 255)' &&
				a.classList.add('arrowlight');
		});
	}, [pathname]);
	const handleNameHeader = () => {
		let navbar = document.querySelector('nav');
		window.scrollTo(0, 0);
		if (
			navbar.classList.contains('hamburger-page') ||
			navbar.classList.contains('nav-height')
		)
			handleHamburgerClose();
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
				<Link to={'/home'}>
					<h1 onClick={handleNameHeader}>Qoreeb</h1>
				</Link>
			</div>
			<div className="nav-content">
				<ul className="navlinks">
					<li className="first-child">
						<NavLink to={`/home`}>Home</NavLink>
					</li>
					<li>
						<Link className="works-link" to={'/home/1'} onClick={handleScroll}>
							Works
						</Link>
					</li>
					<li>
						<a
							href="https://drive.google.com/file/d/18XD4qb0VQeRAsmZ2Xbk-D1JM7wajVvVX/view"
							target="_blank"
							rel="noreferrer"
						>
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
