import arrow from '../images/Vector1.png';

const ProjectGrid = props => {
	return (
		<div className="projects-grid-container">
			<section className="projects-grid">
				<a href={`${props.link1}`} target="_blank" rel="noreferrer">
					<div className="item7 projects-grid-sub">
						<h1 className="imgheader">{props.heading1}</h1>
						<img src={props.image1} alt="item7" />
						<p>
							<span className="grid-src">
								{props.about1}
								<br />
								<span className="grid-source">{props.source1}</span>
							</span>
							<span>{props.year1}</span>
						</p>
					</div>
				</a>
				<a href={`${props.link2}`} target="_blank" rel="noreferrer">
					<div className="magverse projects-grid-sub" data-aos="fade-left">
						<h1 className="imgheader">{props.heading2}</h1>
						<img src={props.image2} alt="magverse" />
						<p>
							<span className="grid-src">
								{props.about2}
								<br />
								<span className="grid-source">{props.source2}</span>
							</span>
							<span>{props.year2}</span>
						</p>
					</div>
				</a>
				<i className="arrow-down projects-grid-sub">
					<span>
						People ignore design <br /> that ignores people.
					</span>
					<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
				</i>
				<i className="arrow-down-right projects-grid-sub">
					<span>
						Do not seek praise, <br />
						seek criticism{' '}
					</span>
					<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
				</i>
				<a href={`${props.link3}`} target="_blank" rel="noreferrer">
					<div className="nft projects-grid-sub" data-aos="fade-right">
						<h1 className="imgheader">{props.heading3}</h1>
						<img src={props.image3} alt="item7" />
						<p>
							<span className="grid-src">
								{props.about3}
								<br />
								<span className="grid-source">{props.source3}</span>
							</span>
							<span>{props.year3}</span>
						</p>
					</div>
				</a>
				<a href={`${props.link4}`} target="_blank" rel="noreferrer">
					<div className="restaurant projects-grid-sub" data-aos="fade-up">
						<h1 className="imgheader">{props.heading4}</h1>
						<img src={props.image4} alt="magverse" />
						<p>
							<span className="grid-src">
								{props.about4}
								<br />
								<span className="grid-source">{props.source4}</span>
							</span>
							<span>{props.year4}</span>
						</p>
					</div>
				</a>
				<a href={`${props.link5}`} target="_blank" rel="noreferrer">
					<div className="car projects-grid-sub" data-aos="fade-left">
						<h1 className="imgheader">{props.heading5}</h1>
						<img src={props.image5} alt="item7" />
						<p>
							<span className="grid-src">
								{props.about5}
								<br />
								<span className="grid-source">{props.source5}</span>
							</span>
							<span>{props.year5}</span>
						</p>
					</div>
				</a>
				<i className="arrow-bottom">
					<span>
						While great art makes you <br /> wonder, great design <br /> makes
						things clear
					</span>
					<img src={arrow} alt="arrow" className="arrow arrow-down-img" />
				</i>
				<a href={`${props.link6}`} target="_blank" rel="noreferrer">
					<div className="elearn projects-grid-sub" data-aos="fade-right">
						<h1 className="imgheader">{props.heading6}</h1>
						<img src={props.image6} alt="magverse" />
						<p>
							<span className="grid-src">
								{props.about6}
								<br />
								<span className="grid-source">{props.source6}</span>
							</span>
							<span>{props.year6}</span>
						</p>
					</div>
				</a>
			</section>
		</div>
	);
};

export default ProjectGrid;
