
import arrow from "../images/Vector 1.png"
import Socials from "./Socials";
const Create = () => {
    return (
        <section className="create">
            <header className="create-header">
                <p className="no">04</p>
                <p className="main-text">Let's Create <img src={arrow} alt="" className="create-arrow" /></p>
            </header>
            <div className="create-sub">
                <Socials />
            </div>
            <div className="small">Qoreeb &copy; 2022</div>
        </section>
    );
}

export default Create;