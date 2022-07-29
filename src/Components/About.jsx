import Navbar from './Navbar';
import arrow from '../images/Vector 1.png';
import { AboutMoving } from './Works';
import Create from './Create';
import Headers from './Headers';
import Figma from '../images/figma.png';
import AdobeXD from '../images/Adobexd.png';
import Photoshop from '../images/photoshop.png';
import Illustrator from '../images/illustrator.png';
import Blender from '../images/blender.png';
import Corel from '../images/coreldraw.png';
import Webflow from '../images/webflow.png';
import Footer from './Footer';
// import profile from "../images/QoreebPicture.png"

const About = () => {
	return (
		<>
			<Navbar />
			<article className="about">
				<main>
					<div className="main" data-aos="fade-left">
						<p className="no">05</p>
						<p className="main-text">About Me</p>
						<div className="scroll-container">
							<p className="scroll">Scroll</p>
						</div>
						<p className="sub-text">
							<span className="ii">I love to create </span>
							<span className="ii">
								Unique User Experience and <br />
								Digital User Interface
							</span>
						</p>
					</div>
					<div className="about-desc" data-aos="fade-right">
						<p>
							I love Design, Art, and Technology. I'm a Product designer
							specialized in creating seamless user experiences and digital user
							interfaces. In my professional career, I have always gravitated
							towards the technology industry because of its ability to have a
							positive impact at scale. Through my experience, I've discovered
							that I am most fulfilled collaborating with partners to develop
							elegant solutions to complex problems.
						</p>
						<p>
							With a background in graphic design, I'm particularly drawn to
							projects that require a high degree of craft, vision, and design
							thinking. In my personal endeavours, I seek out volunteer
							opportunities to use storytelling and advocacy as a method to aid
							underserved communities and create a more sustainable future.
						</p>
					</div>
					<div className="about-arrow-container" data-aos="fade-left">
						<i className="arrow-down projects-grid-sub">
							<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
						</i>
						<div className="my-services">
							<h3>My Services</h3>
							<ul>
								<li>UI Design</li>
								<li>UX Design</li>
								<li>Digital Art</li>
							</ul>
						</div>
					</div>
					<div className="profile"></div>
					<Skills />
					<Tools />
					<Certificates />
					<HorizontalMoving />
					<WorkExperience />
					<AboutMoving
						header={'Explore More'}
						text={'Contact'}
						link={`contact`}
					/>
					<Create />
				</main>
				<Footer />
			</article>
		</>
	);
};

export default About;

const Skills = () => {
	return (
		<section className="skills">
			<Headers no="06" text="skills" />
			<div className="skills-content">
				<div>
					<i className="arrow-down projects-grid-sub">
						<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
					</i>
				</div>
				<ul>
					<li>Professional</li>
					<li>UI Design</li>
					<li>Visual Design</li>
					<li>UX Research</li>
					<li>Empathy</li>
					<li>Design Thinking</li>
					<li>Usability Testing</li>
				</ul>
				<ul>
					<li>Personal</li>
					<li>Leadership</li>
					<li>Team Work</li>
					<li>Honesty</li>
					<li>Progamatsm</li>
					<li>Detail Oriented</li>
					<li>Communication</li>
				</ul>
			</div>
		</section>
	);
};

export { Skills };
const Tools = () => {
	return (
		<section className="tools">
			<Headers no={'07'} text="tools" />
			<div className="tools-image">
				<span>
					<b>
						<img src={Figma} alt="figma" />{' '}
					</b>{' '}
					Figma{' '}
				</span>
				<span>
					<b>
						<img src={AdobeXD} alt="Adobe XD" />{' '}
					</b>
					Adobe XD
				</span>
				<span>
					<b>
						<img src={Photoshop} alt="Adobe Photoshop" />{' '}
					</b>{' '}
					Adobe Photoshop
				</span>
				<span>
					<b>
						<img src={Illustrator} alt="Adobe Illustrator" />{' '}
					</b>
					Adobe Illustrator{' '}
				</span>
				<span>
					<b>
						<img src={Blender} alt="Blender" />
					</b>{' '}
					Blender
				</span>
				<span>
					<b>
						<img src={Corel} alt="Corel Draw" />
					</b>{' '}
					Corel Draw
				</span>
				<span>
					<b>
						<img src={Webflow} alt="Webflow" />
					</b>{' '}
					Webflow
				</span>
			</div>
		</section>
	);
};

export { Tools };

const HorizontalMoving = () => {
	return (
		<section className="horizontal-moving-container">
			<div className="horizontal-moving">
				<span className="ilyas">BEHANCE x 30 </span>
				<span className="camar">-</span>
				<span className="camar"> UI/UX DESIGN,</span>
				<span className="camar">-</span>
				<span className="ilyas"> DIGITAL ART </span>
				<span className="camar">-</span>
				<span className="camar"> BEHANCE </span>
				<span className="camar">-</span>
				<span className="camar"> UI/UX DESIGN</span>
			</div>
		</section>
	);
};

export { HorizontalMoving };
const Certificates = () => {
	return (
		<section className="certificates">
			<i className="arrow-down projects-grid-sub">
				<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
			</i>
			<div className="certificates-test">
				<h1>Certifications</h1>
				<div>
					<p>UI/UX Design</p>
					<small>Malhub, 2021</small>
					<p>
						Google UX Deign <br /> Certificate Course
					</p>
					<small>Coursera, 2022</small>
					<p>HND. Civil Engineering </p>
					<small>Kwara State Polytechnic, Ilorin, 2023</small>
				</div>
			</div>
		</section>
	);
};

export { Certificates };

const WorkExperience = () => {
	return (
		<section className="about-work-experience">
			<Headers no={'08'} text={'Work Experience'} />
			<div className="about-work-experience-arrow-container">
				<div>
					<div>
						<i className="arrow-down projects-grid-sub">
							<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
						</i>
					</div>
					<div>
						<h1>UI/UX Designer / Ralio Art (Lagos, Nigeria)</h1>
						<h3>AUG 2021 - PRESENT (Remote)</h3>
						<span>
							Collaborate with developers, content writers and managers to
							provide design solutions to solve user needs and business
							chanllanges through user research, interaction design, visual
							design and prototyping.
						</span>
						<span>
							Updating the design system, by adding and resizing all necessary
							elementsthat help grow the system and improve usage making it
							easier to access products.
						</span>
					</div>
				</div>

				<div>
					<div>
						<i className="arrow-down projects-grid-sub">
							<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
						</i>
					</div>
					<div>
						<h1>UI Designer (Intern) / Sleekeasy (Lagos Nigeria)</h1>
						<h3>AUG 2021- JAN 2022 (Remote)</h3>
						<span>
							Over the course of the project, we created wireframes and
							conducted user research to help create simplified interface for a
							beauty web app.
						</span>
						<span>
							Prototyped and defined the interaction models and motion
							behaviours for the application.
						</span>
						<span>
							Assisted a senior UI Designer in designing a website for the
							company.
						</span>
					</div>
				</div>
				<div>
					<div>
						<i className="arrow-down projects-grid-sub">
							<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
						</i>
					</div>
					<div>
						<h1>UI/UX Designer / OpenSafari (Texas,USA)</h1>
						<h3>March 2022 - Present (Contract)</h3>
						<span>
							Created the company's first website and mobile application. <br />
							<br />
							Proposed several solutions around products. <br />
							<br />
							Created design system for web and mobile application. <br />
							<br />
							Designed pitch deck that has won several grants and partnerships.{' '}
							<br />
							<br />
							Currently consulting for OpenSafari.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
export { WorkExperience };
