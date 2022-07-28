import Headers from './Headers';
import profile from '../images/Qoreeb.png';
const AboutMini = () => {
	return (
		<div className="about">
			<Headers no={'03'} text={'About Me'} />
			<div className="about-absolute-container">
				<div className="about-text" data-aos="fade-right">
					<p>
						I love Design, Art, and Technology. I'm a Product designer
						specialized in creating seamless user experiences and digital user
						interfaces. In my professional career, I have always gravitated
						towards the technology industry because of its ability to have a
						positive impact at scale. Through my experience, I've discovered
						that I am most fulfilled collaborating with partners to develop
						elegant solutions to complex problems.
					</p><br />
					<p>
						With a background in graphic design, I'm particularly drawn to
						projects that require a high degree of craft, vision, and design
						thinking. In my personal endeavours, I seek out volunteer
						opportunities to use storytelling and advocacy as a method to aid
						underserved communities and create a more sustainable future.
					</p>
				</div>
				<div className="about-img-container">
					<img src={profile} alt="profile" />
				</div>
				<section className="about-absolute">
					<div>
						<p>Awwwards x16</p>
						<span>Honorable Mentions</span>
					</div>
					<div>
						<p>Behance x30</p>
						<span>UIU/UX, Digital Arts</span>
					</div>
					<div>
						<p>Best at</p>
						<span>The Very Best at Multitasking</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutMini;
