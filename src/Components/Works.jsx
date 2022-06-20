import Navbar from "./Navbar";
import ProjectGrid from "./ProjectGrid";
import IFG from "../images/14G.png";
import Magverse from "../images/Magverse.png";
import NFT from "../images/NFT.png";
import Restaurant from "../images/Restaurant.png";
import Car from "../images/Car Pack.png";
import ELearn from "../images/E-learn.png";
import Bb from "../images/BB collection.png";
import Cake from "../images/Cake face.png";
import Cab from "../images/Cab App.png";
import Dragon from "../images/Dragon face.png";
import Glowing from "../images/Glowing Angel.png";
import Space from "../images/Space home.png";
import Create from "./Create";

const AboutMoving = (props) => {
	return (
		<section className="about-moving">
			<p>{props.header}</p>
			<div>
				<h1>
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
				</h1>
			</div>
		</section>
	);
};

export { AboutMoving };

const Works = () => {
	return (
		<article className="works">
			<Navbar />
			<main>
				<div className="main">
					<p className="no">11</p>
					<p className="main-text">
						featured
						<br />
						works
					</p>
				</div>
				<div className="with-love-container">
					<p className="with-love">
						The best from web interface, app interface & photoship art <br />
						<br />
						From Qoreeb with love.
					</p>
				</div>
			</main>
			<ProjectGrid
				image1={IFG}
				image2={Magverse}
				image3={NFT}
				image4={Restaurant}
				image5={Car}
				image6={ELearn}
				heading1={"14G"}
				heading2={"Magverse"}
				heading3={"NFT"}
				heading4={"Restaurant"}
				heading5={"Car Park"}
				heading6={"E-Learn"}
				about1={"14G Website"}
				about2={"Magverse Website"}
				about3={"Magnificient NFT"}
				about4={"Folk's Food Website"}
				about5={"Parking App"}
				about6={"E-learning Website"}
				source1={"Landing page"}
				source2={"Landing Page"}
				source3={"Landing page"}
				source4={"Landing page"}
				source5={"Mobile App"}
				source6={"Landing page"}
				year1={"2021"}
				year2={"2022"}
				year3={"2022"}
				year4={"2021"}
				year5={"2021"}
				year6={"2021"}
			/>
			<ProjectGrid
				image1={Bb}
				image2={Space}
				image3={Cab}
				image4={Cake}
				image5={Glowing}
				image6={Dragon}
				heading1={"BB Collections"}
				heading2={"Space Home"}
				heading3={"Onis Cab App"}
				heading4={"Cake Face"}
				heading5={"Glowing Angel"}
				heading6={"Dragon Face Tatoo"}
				about1={"Bb Collections Website"}
				about2={"Space Home Manipulation"}
				about3={"Onis Cab App"}
				about4={"Cake Face Manipulation"}
				about5={"Glowing Angel Manipulation"}
				about6={"Dragon Face Tatto"}
				source1={"Landing page"}
				source2={"Photoshop"}
				source3={"Mobile App"}
				source4={"Photoshop Art"}
				source5={"Photoshop"}
				source6={"Photoshop"}
				year1={"2021"}
				year2={"2021"}
				year3={"2021"}
				year4={"2021"}
				year5={"2021"}
				year6={"2021"}
			/>
			<section className="more-works-container">
				<div className="more-works">
					<p>More works are coming soon...</p>
				</div>
			</section>
			{<AboutMoving header={"Explore More"} text={"About Me"} />}
			<Create />
		</article>
	);
};

export default Works;
