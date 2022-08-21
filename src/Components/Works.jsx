import Navbar from './Navbar';
import ProjectGrid from './ProjectGrid';
import IFG from '../images/item7.png';
import Magverse from '../images/Magverse.png';
import NFT from '../images/NFT.png';
import Restaurant from '../images/Restaurant.png';
import Car from '../images/CarPack.png';
import ELearn from '../images/E-learn.png';
import Bb from '../images/BBCollection.png';
import Cake from '../images/CakeFace.png';
import Cab from '../images/CabApp.png';
import Dragon from '../images/DragonFace.png';
import Glowing from '../images/GlowingAngel.png';
import Space from '../images/SpaceHome.png';
import Create from './Create';
import { Link } from 'react-router-dom';

const Works = () => {
	return (
		<article className="works">
			<Navbar />
			<main>
				<div className="main">
					<p className="no">09</p>
					<p className="main-text">
						featured
						<br />
						works
					</p>
				</div>
				<div className="with-love-container">
					<p className="with-love">
						The best from web interface, app interface & photoshop art <br />
						<br />
						From Qoreeb with love.
					</p>
				</div>
			</main>
			<ProjectGrid
				link1={'https://www.behance.net/gallery/140665139/I4G-landing-page'}
				link2={
					'https://www.behance.net/gallery/141034043/MetaVerse-Landing-Page'
				}
				link3={''}
				link4={
					'https://www.behance.net/gallery/148885003/Food-Ordering-Website'
				}
				link5={'https://www.behance.net/gallery/140681963/Parking-App'}
				link6={
					'https://www.behance.net/gallery/140663029/E-learning-landing-page'
				}
				image1={IFG}
				image2={Magverse}
				image3={NFT}
				image4={Restaurant}
				image5={Car}
				image6={ELearn}
				heading1={'14G'}
				heading2={'Magverse'}
				heading3={'NFT'}
				heading4={'Restaurant'}
				heading5={'Car Park'}
				heading6={'E-Learn'}
				about1={'14G Website'}
				about2={'Magverse Website'}
				about3={'Magnificient NFT'}
				about4={"Folk's Food Website"}
				about5={'Parking App'}
				about6={'E-learning Website'}
				source1={'Landing page'}
				source2={'Landing Page'}
				source3={'Landing page'}
				source4={'Landing page'}
				source5={'Mobile App'}
				source6={'Landing page'}
				year1={'2021'}
				year2={'2022'}
				year3={'2022'}
				year4={'2021'}
				year5={'2021'}
				year6={'2021'}
			/>
			<ProjectGrid
				link1={''}
				link2={''}
				link3={''}
				link4={''}
				link5={''}
				link6={''}
				image1={Bb}
				image2={Space}
				image3={Cab}
				image4={Cake}
				image5={Glowing}
				image6={Dragon}
				heading1={'BB Collections'}
				heading2={'Space Home'}
				heading3={'Onis Cab App'}
				heading4={'Cake Face'}
				heading5={'Glowing Angel'}
				heading6={'Dragon Face Tatoo'}
				about1={'Bb Collections Website'}
				about2={'Space Home Manipulation'}
				about3={'Onis Cab App'}
				about4={'Cake Face Manipulation'}
				about5={'Glowing Angel Manipulation'}
				about6={'Dragon Face Tatto'}
				source1={'Landing page'}
				source2={'Photoshop'}
				source3={'Mobile App'}
				source4={'Photoshop Art'}
				source5={'Photoshop'}
				source6={'Photoshop'}
				year1={'2021'}
				year2={'2021'}
				year3={'2021'}
				year4={'2021'}
				year5={'2021'}
				year6={'2021'}
			/>
			<section className="more-works-container">
				<div className="more-works">
					<p>More works are coming soon...</p>
				</div>
			</section>
			<AboutMoving header={'Explore More'} text={'About Me'} link={'about'} />
			<Create />
		</article>
	);
};

export default Works;
const AboutMoving = (props) => {
	return (
		<section className="about-moving-container">
			<section className="about-moving">
				<p>{props.header}</p>
				<div>
					<h1>
						<Link to={`/${props.link}`}>
							<span className="ilyas">{props.text}</span>
							<span className="camar">-</span>
							<span className="camar"> {props.text} </span>
							<span className="camar">-</span>
							<span className="ilyas"> {props.text} </span>
							<span className="camar">-</span>
							<span className="camar"> {props.text} </span>
							<span className="camar">-</span>
							<span className="ilyas"> {props.text} </span>
							<span className="camar">-</span>
							<span className="camar"> {props.text} </span>
							<span className="ilyas"> {props.text} </span>
							<span className="camar">-</span>
							<span className="camar"> {props.text} </span>
						</Link>
					</h1>
				</div>
			</section>
		</section>
	);
};

export { AboutMoving };
