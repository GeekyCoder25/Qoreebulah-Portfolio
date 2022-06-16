import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import "./fontawesome-free-6.1.1-web/css/all.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";
import About from "./Components/About";
import Works from "./Components/Works";
import Error from "./Components/Error";
import Firstpage from "./Components/Firstpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
