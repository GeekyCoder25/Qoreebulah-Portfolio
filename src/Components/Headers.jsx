const Headers = (props) => {
    return (
			<header className="headers" data-aos="fade-left">
				<p className="no">{props.no}</p>
				<p className="main-text">{props.text}</p>
			</header>
		);
}

export default Headers;