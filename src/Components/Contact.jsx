import { useRef } from 'react';
import { useState } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import Socials from './Socials';

const Contact = () => {
	let getDates = new Date();
	let getHour = getDates.getHours();
	let getMinute = getDates.getMinutes();
	let getSecond = getDates.getSeconds();

	const [hour, setHour] = useState('0');
	const [minute, setminute] = useState('0');
	const [second, setsecond] = useState('0');
	const contactFooter = useRef();

	function handleDate() {
		setHour(getHour);
		setminute(getMinute);
		setsecond(getSecond);
	}
	setTimeout(handleDate, 1000);
	const autoscroll = () =>
		contactFooter.current.scrollIntoView({ behavior: 'smooth' });
	return (
		<>
			<Navbar />
			<article className="contact">
				<div className="contact-header">
					<p className="time" onLoad={handleDate}>
						{hour < 10 ? '0' + hour : hour}
						<span>:</span>
						{minute < 10 ? '0' + minute : minute}
						<span>:</span>
						{second < 10 ? '0' + second : second}
					</p>
					<span className="to">SAY HI</span>
					<h1 className="to">
						TO QOREEB - <br />{' '}
						<a href="mailto:qoribullahabubakar@gmail.com" className="myemail">
							INFO@QOREEB.DESIGN
						</a>
					</h1>
					<button
						type="submit"
						className="contact-absolute"
						onClick={autoscroll}
					>
						Contact Me
					</button>
				</div>
				<div className="contact-footer">
					<Socials contactFooter />
				</div>
				<Form contactFooter={contactFooter} />
			</article>
		</>
	);
};

export default Contact;
