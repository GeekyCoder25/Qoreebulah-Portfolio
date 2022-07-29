import { Link } from 'react-router-dom';
import arrow from '../images/Vector 1.png';
import Socials from './Socials';
const Create = () => {
	return (
		<section className="create">
			<header className="create-header" data-aos="fade-left">
				<p className="no">04</p>
				<p className="main-text">
					<Link to={`/contact`}>
						Let's Create <img src={arrow} alt="" className="arrow create-arrow" />
					</Link>
				</p>
			</header>
			<div className="create-sub">
				<Socials />
			</div>
			<div className="small">Qoreeb &copy; 2022</div>
		</section>
	);
};

export default Create;
