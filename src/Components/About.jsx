import Navbar from './Navbar';
import arrow from '../images/Vector1.png';
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
					<div className="main">
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
							Hi, I'm Abubakar Qoreebullah, a product designer, passionate about
							the usage of my skills on initiating frictionless user interfaces
							that ultimately enhance the overall experience of the end users.
							My attraction to creativity and my dexterity in graphics help me
							create projects that capture users' attention and provide
							practical solutions to their needs.
						</p>
						<p style={{marginTop: '50px'}}>
							To strengthen my impact on the daily lives of internet users and
							broaden my reach, I have always made the technology industry my
							main focus. Coming up with effective solutions to mind-boggling
							issues within a short period is one of my strong suits. This makes
							me seamlessly fit into teams, and I'm always willing to partner
							with organizations that prioritize user experience.
						</p>
						<p>
							I have engaged in free volunteering projects that employ artistic
							designs to narrate the stories of low-income communities and their
							pressing issues while helping them build a greener future.
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
