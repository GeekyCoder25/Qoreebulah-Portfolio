import japan_img from "../images/Mask group.jpg"
import AboutMini from "./AboutMini";
import Create from "./Create";
import Navbar from "./Navbar";
import Projects from "./Project";
import WorkWith from "./WorkWith";

const handleMode = () => {
    if (document.body.style.backgroundColor !== "rgb(241, 248, 248)") {
        document.body.style.backgroundColor = "rgb(241, 248, 248)";
        document.body.style.color = "#151515";
    }
    else {
        document.body.style.backgroundColor = "#151515";
        document.body.style.color = "white";
    }
}
const Home = () => {
    return (
        <>
            <Navbar />
            <main className="home">
                <div className="main">
                    <p className="no">01</p>
                    <p className="main-text">i design <br />unique user <br />experience and <br />digital <br /> user interface</p>
                    <p className="scroll" onClick={handleMode}>Scroll</p>
                </div>
                <section className="japan-container">
                    <img src={japan_img} alt="japan_img" className="japan" />
                    <div className="play">
                        <i className="fas fa-play fa-5x"></i>
                    </div>
                </section>
                <Projects />
                <AboutMini />
                <WorkWith />
                <Create />
            </main>
        </>
    );
}

export default Home;