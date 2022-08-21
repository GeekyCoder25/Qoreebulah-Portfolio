import Headers from './Headers';
import profile from '../images/Qoreeb.png';
const AboutMini = () => {
	return (
		<div className="about-mini">
			<Headers no={'03'} text={'About Me'} />
			<div className="about-absolute-container">
				<div className="about-text" data-aos="fade-right">
					<p>
						Hi, I'm Abubakar Qoreebullah, a product designer, passionate about
						the usage of my skills on initiating frictionless user interfaces
						that ultimately enhance the overall experience of the end users. My
						attraction to creativity and my dexterity in graphics help me create
						projects that capture users' attention and provide practical
						solutions to their needs.
					</p><br />
					<p >
						To strengthen my impact on the daily lives of internet users and
						broaden my reach, I have always made the technology industry my main
						focus. Coming up with effective solutions to mind-boggling issues
						within a short period is one of my strong suits. This makes me
						seamlessly fit into teams, and I'm always willing to partner with
						organizations that prioritize user experience.
					</p><br />
					<p>
						I have engaged in free volunteering projects that employ artistic
						designs to narrate the stories of low-income communities and their
						pressing issues while helping them build a greener future.
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
