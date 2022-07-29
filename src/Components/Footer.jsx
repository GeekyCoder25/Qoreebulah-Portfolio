const Footer = () => {
	return (
		<section className="footer">
			<div>
				Developed by{' '}
				<span className="devname-container">
					<span className="devname">
						<a
							href="https://geekycoder25.github.io/portfolio2"
							target="_blank"
							rel="noreferrer"
						>
							Toyib Lawal
						</a>
					</span>
				</span>
			</div>
			<div className="devlinks">
				<a
					href="https://twitter.com/_GeekyCoder_"
					target="_blank"
					rel="noreferrer"
				>
					<em className="fab fa-twitter fa-2x"></em>
				</a>
				<a
					href="https://www.linkedin.com/in/toyib-lawal"
					target="_blank"
					rel="noreferrer"
				>
					<em className="fab fa-linkedin fa-2x"></em>
				</a>
			</div>
		</section>
	);
};

export default Footer;
