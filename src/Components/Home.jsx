// import japan_img from '../images/Mask group.jpg';
import {useEffect} from 'react';
import AboutMini from './AboutMini';
import Create from './Create';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Project';
import WorkWith from './WorkWith';

const Mode = () => {
	const handleLightMode = () => {
		const dark = document.getElementsByClassName('fa-moon');
		const light = document.getElementsByClassName('fa-circle-half-stroke');
		const nav = document.querySelector('nav');
		const arrow = document.querySelectorAll('.arrow');
		document.documentElement.style.setProperty(
			'--darkmodecolor',
			'--darkmodebackcolor'
		);
		document.documentElement.style.setProperty(
			'--darkmodebackcolor',
			'#fafafa'
		);
		document.documentElement.style.setProperty(
			'--darkmodebordercolor',
			'black'
		);
		document.documentElement.style.setProperty(
			'--darkmodestrokecolor',
			'black'
		);
		document.documentElement.style.setProperty(
			'--darkmodeoppbackcolor',
			'rgba(255, 255, 255, 0.5)'
		);
		document.documentElement.style.setProperty(
			'--darkmodeformbackcolor',
			'#151515'
		);
		document.documentElement.style.setProperty('--circlebordercolor', 'black');
		light[0].style.display = 'none';
		dark[0].style.display = 'block';
		document.body.style.backgroundColor = '#fafafa';
		if (nav) nav.style.backgroundColor = document.body.style.backgroundColor;
		arrow.forEach(a => {
			a.classList.add('arrowlight');
		});
		localStorage.setItem('theme', 'light');
	};

	const handleDarkMode = () => {
		const dark = document.getElementsByClassName('fa-moon');
		const light = document.getElementsByClassName('fa-circle-half-stroke');
		const nav = document.querySelector('nav');
		const arrow = document.querySelectorAll('.arrow');
		document.documentElement.style.setProperty(
			'--darkmodebackcolor',
			'#151515'
		);
		document.documentElement.style.setProperty('--darkmodecolor', 'white');
		document.documentElement.style.setProperty('--darkmodebordercolor', '#fff');
		document.documentElement.style.setProperty(
			'--darkmodestrokecolor',
			'white'
		);
		document.documentElement.style.setProperty(
			'--circlebordercolor',
			'rgba(255, 255, 255, 0.6)'
		);
		document.documentElement.style.setProperty(
			'--darkmodeoppbackcolor',
			'rgba(0, 0, 0, 0.3)'
		);
		document.documentElement.style.setProperty(
			'--darkmodeformbackcolor',
			'#efefef'
		);
		light[0].style.display = 'block';
		dark[0].style.display = 'none';
		document.body.style.backgroundColor = '#151515';
		if (nav) nav.style.backgroundColor = document.body.style.backgroundColor;
		arrow.forEach(a => {
			a.classList.remove('arrowlight');
		});
		localStorage.setItem('theme', 'dark');
	};

	useEffect(() => {
		localStorage.getItem('theme') === 'dark'
			? handleDarkMode()
			: handleLightMode();
	}, []);
	return (
		<div className="mode">
			<i className="fas fa-circle-half-stroke" onClick={handleLightMode}></i>
			<i className="fas fa-moon" onClick={handleDarkMode}></i>
		</div>
	);
};

export {Mode};

const Home = () => {
	const arrows = document.getElementsByClassName('arrow');

	useEffect(() => {
		if (localStorage.getItem('theme') === 'light') {
			[...arrows].forEach(a => a.classList.add('arrowlight'));
		}
	}, [arrows]);
	return (
		<>
			<Navbar />
			<main className="home">
				<article>
					<div className="main">
						<p className="no">01</p>
						<p className="main-text">
							i design <br />
							unique user <br />
							<span>
								experience and <br />
							</span>
							<span>
								digital <br /> user interface
							</span>
						</p>
						<div className="scroll-container">
							<p className="scroll">Scroll</p>
						</div>
					</div>
					{/* <section className="japan-container" data-aos="fade-up">
						<img src={japan_img} alt="japan_img" className="japan" />
						<div className="play">
							<i className="fas fa-play fa-5x"></i>
						</div>
					</section> */}
					<Projects />
					<AboutMini />
					<WorkWith />
					<Create />
					<Footer />
				</article>
			</main>
		</>
	);
};

export default Home;
