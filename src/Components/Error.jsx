import { Link } from 'react-router-dom';
import errorImage from '../images/naruto-crying.gif';
import Navbar from './Navbar';

const Error = () => {
	return (
		<>
			<Navbar />  
			<div className="error">
				<img src={errorImage} alt="error" />
				<h1>
					<span>404</span>
					<br /> Page Not Found
				</h1>
				<Link to="/">Back to home</Link>
			</div>
		</>
	);
};

export default Error;
