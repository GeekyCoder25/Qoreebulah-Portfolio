import { useState } from 'react';
const Form = () => {
	const [namevalid, setNamevalid] = useState('');
	const [emailvalid, setEmailvalid] = useState('');
	const [messagevalid, setMessagevalid] = useState('');

	const handleName = (e) => {
		e.target.value === ''
			? setNamevalid('Please input your name')
			: setNamevalid(true);
	};
	const handleEmail = (e) => {
		e.target.value.length < 6 ||
		!e.target.value.includes('@') ||
		!e.target.value.includes('.')
			? setEmailvalid('Please input a valid email')
			: setEmailvalid(true);
	};
	const handleMessage = (e) => {
		e.target.value === ''
			? setMessagevalid('Please include a message')
			: setMessagevalid(true);
	};
	return (
		<form
			action="https://formsubmit.co/toyibe25@gmail.com"
			method="POST"
			className="form"
		>
			<input
				type="hidden"
				name="_next"
				value={`https://geekycoder25.github.io/Qoreebullah-Portfolio/#/submit`}
			/>
			<input
				type="hidden"
				name="_subject"
				value="Qoreeb's Portfolio Form Submit"
			/>
			<input type="hidden" name="_captcha" value="false" />
			<p className="contact-me">Contact me</p>
			<p className="hello-heading" data-aos="fade-up">
				Hello,
			</p>
			<div>
				<div>
					<label htmlFor="name" className="namelabel" data-aos="fade-up">
						MY NAME IS
					</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name here"
						onBlur={handleName}
						required
						onInvalid={(e) => {
							e.preventDefault();
							if (!namevalid) {
								setNamevalid('Please input your name');
							}
						}}
					/>
				</div>
				{<p className="formvalid">{namevalid}</p>}
			</div>
			<div>
				<div>
					<label htmlFor="email" data-aos="fade-up">
						HERE IS MY EMAIL
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email here"
						required
						onBlur={handleEmail}
						onInvalid={(e) => {
							e.preventDefault();
							if (!emailvalid) {
								setEmailvalid('Please input a valid email');
							}
						}}
					/>
				</div>
				{<p className="formvalid">{emailvalid}</p>}
			</div>
			<div>
				<div>
					<label htmlFor="product" data-aos="fade-up">
						I'M LOOKING FOR
					</label>
					<textarea
						name="product"
						id="product"
						cols="0"
						rows="0"
						placeholder="Enter your product details"
						required
						onBlur={handleMessage}
						onInvalid={(e) => {
							e.preventDefault();
							if (!messagevalid) {
								setMessagevalid('Please include a message');
							}
						}}
					></textarea>
				</div>
				{<p className="formvalid">{messagevalid}</p>}
			</div>
			<div className="submit">
				<button type="submit">Send</button>
			</div>
		</form>
	);
};

export default Form;