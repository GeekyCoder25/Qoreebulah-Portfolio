import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Loading = () => {
	const [countdown, setcountdown] = useState(0);
	const navigate = useNavigate();

	const now = document.querySelector('.now');
	const loadingContent = document.querySelector('.loading');
	useEffect(() => {
		const interval = setInterval(() => {
			if (countdown < 100) {
				setcountdown(countdown + 1);
			} else if (countdown >= 100) {
				setTimeout(
					() => loadingContent.classList.add('first-page-animation'),
					1500
				);
				setTimeout(() => navigate(`/home`), 2000);
				loadingContent.classList.add('loading-complete');
				now.classList.add('loading-complete-now');
			}
		}, 20);
		return () => clearInterval(interval);
	}, [countdown, navigate, now, loadingContent]);

	return (
		<article className="loading">
			<h1>
				<span className="countdown">
					{countdown < 10 ? '0' + countdown : countdown}
					<span className="hyphen"> - </span>100
				</span>
				<span>YOUR</span> <br />
				<span>WEB EXPERIENCE</span> <br />
				<span>
					IS LOADING RIGHT <span className="now">NOW</span>
				</span>
			</h1>
			<p>
				Please wait <br /> a few seconds
			</p>
		</article>
	);
};
export default Loading;
