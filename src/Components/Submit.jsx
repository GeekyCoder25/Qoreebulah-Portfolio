import { Link } from 'react-router-dom';

function Submit() {
	return (
		<div className="submit-page">
			<h1>
				Your info has been received. <br /> I'll get back to you soon
			</h1>

			<Link to={`/home`}>
				<button>Back to Home</button>
			</Link>
		</div>
	);
}

export default Submit;
