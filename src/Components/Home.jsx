import japan_img from '../images/Mask group.jpg';
import AboutMini from './AboutMini';
import Create from './Create';
import Navbar from './Navbar';
import Projects from './Project';
import WorkWith from './WorkWith';

const dark = document.getElementsByClassName('fa-moon');
const light = document.getElementsByClassName('fa-circle-half-stroke');

const Mode = () => {
	const handleLightMode = () => {
		const nav = document.querySelector('nav');
		document.documentElement.style.setProperty(
			'--darkmodecolor',
			'--darkmodebackcolor'
		);
		document.documentElement.style.setProperty(
			'--darkmodebackcolor',
			'--darkmodecolor'
		);
		document.documentElement.style.setProperty(
			'--darkmodebordercolor',
			'black'
		);
		document.documentElement.style.setProperty(
			'--darkmodestrokecolor',
			'black'
		);
		document.documentElement.style.setProperty('--circlebordercolor', 'black');
		light[0].style.display = 'none';
		dark[0].style.display = 'block';
		document.body.style.backgroundColor = '#fff';
		nav.style.backgroundColor = document.body.style.backgroundColor;
	};
	const handleDarkMode = () => {
		const nav = document.querySelector('nav');
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
		document.documentElement.style.setProperty('--circlebordercolor', 'rgba(255, 255, 255, 0.6)');
		light[0].style.display = 'block';
		dark[0].style.display = 'none';
		document.body.style.backgroundColor = '#151515';
		nav.style.backgroundColor = document.body.style.backgroundColor;
	};

	return (
		<div className="mode">
			<i className="fas fa-circle-half-stroke" onClick={handleLightMode}></i>
			<i className="fas fa-moon" onClick={handleDarkMode}></i>
		</div>
	);
};

export { Mode };

const Home = () => {
	return (
		<>
			<Navbar />
			<main className="home">
				<div className="main">
					<p className="no">01</p>
					<p className="main-text">
						i design <br />
						unique user <br />
						experience and <br />
						digital <br /> user interface
					</p>
					<p className="scroll">Scroll</p>
				</div>
				<section className="japan-container">
					<img src={japan_img} alt="japan_img" className="japan" />
					<div className="play">
						<i className="fas fa-play fa-5x"></i>
					</div>
				</section>
				<Projects />
				<AboutMini />
				<WorkWith />
				<Create />
			</main>
		</>
	);
};

export default Home;
