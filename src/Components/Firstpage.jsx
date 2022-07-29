// import { useNavigate } from "react-router";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import mine from '../images/QoreebPicture.png';

const Firstpage = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		const first = document.querySelector('.first-page');
		first.classList.add('first-page-animation');
		setTimeout(() => navigate(`/loading`), 1000);
	};
	return (
		<article className="first-page-container">
			<div className="first-page">
				<img src={mine} alt="Qoreeb" />
				<div className="welcome">WELCOME</div>
				<h1>
					You're accessing Qoreeb's Portfolio Website, hope you have a nice time
					<span className="wave">👋</span>
				</h1>
				<p className="wave-mobile">👋</p>
				<Link to="" onKeyUp={handleNavigate}>
					<button onClick={handleNavigate}>Continue</button>
				</Link>
			</div>
		</article>
	);
};

export default Firstpage;
