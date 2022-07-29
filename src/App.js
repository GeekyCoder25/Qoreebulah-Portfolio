import {
	BrowserRounpter as Router,
	Routes,
	Route,
	// HashRouter,
} from 'react-router-dom';
import './App.css';
// import './fontawesome-free-6.1.1-web/css/all.css';
import ScrollToTop from './Components/ScrollToTop';
import Home, { Mode } from './Components/Home';
import Loading from './Components/Loading';
import About from './Components/About';
// import Works from './Components/Works';
import Contact from './Components/Contact';
import Submit from './Components/Submit';
import Error from './Components/Error';
import Firstpage from './Components/Firstpage';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	offset: 150, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
});

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Firstpage />} />
					<Route path="/loading" element={<Loading />} />
					<Route path="/home" element={<Home />} />
					{/* <Route path="/works" element={<Works />} /> */}
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/submit" element={<Submit />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
			<Mode />
		</div>
	);
}

export default App;
