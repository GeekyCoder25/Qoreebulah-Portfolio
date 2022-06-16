import Navbar from "./Navbar";
import arrow from "../images/Vector 1.png"
import { AboutMoving } from "./Works";
import Create from "./Create";
import Headers from "./Headers";
import Figma from "../images/figma.png"
import AdobeXD from "../images/Adobe xd.png"
import Photoshop from "../images/photoshop.png"
import Illustrator from "../images/illustrator.png"
import Blender from "../images/blender.png"
import Corel from "../images/corel draw.png"
// import profile from "../images/Qoreeb Picture.png"

const About = () => {
    return (
        <article className="about">
            <Navbar />
            <main>
                <div className="main">
                    <p className="no">06</p>
                    <p className="main-text">About Me</p>
                    <p className="scroll" >Scroll</p>
                    <p className="sub-text"><span className="i">I</span> <span className="ii">love to create</span> <span className="ii">Unique User Experience and </span>Digital User Interface</p>
                </div>
                <div className="about-desc">
                    <p>
                        I love Design, Art,and Technology.
                        I'm a Product designer specialized in creating seamless user experiences and digital user interfaces. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
                    </p>
                    <p>
                        My objective is to gather more experience and knowledge in niche, and to secure a career opportunity that expands my knowledge and fully utilize my knowledge, practice and skills, while ensuring result-oriented efforts in boosting the productivity of organizations.</p>
                </div>
                <div className="about-desc2">
                    <p>
                        I am happy to present my new website  As before I am open for new projects worldwide!
                    </p>
                    <p>
                        Would you like to have award winning site or unique design style, please say hi to me — <br /><a href="mailto:qoribullahabubakar@gmail.com">qoribullahabubakar@gmail.com</a> <br />
                        And I will help you with the pleasure.
                    </p>
                </div>
                <div className="about-arrow-container">
                    <i className="arrow-down projects-grid-sub">
                        <img src={arrow} alt="arrow" className="arrow-down-img" />
                    </i>
                    <div className="my-services">
                        <h3>My Services</h3>
                        <ul>
                            <li>UI Design</li>
                            <li>UX Design</li>
                            <li>Digital Art</li>
                        </ul>
                    </div>
                </div>
                <div className="profile">
                    {/* <img src={profile} alt="profile" className="profile"/> */}
                </div>
                <Skills />
                <Tools />
                <Certificates />
                <HorizontalMoving />
                <WorkExperience />
                <AboutMoving
                    header={'Explore More'}
                    text={'Contact'} />
                <Create />
            </main>
        </article>
    );
}

export default About;

const Skills = () => {
    return ( 
        <section className="skills">
            <Headers 
            no="07"
            text="skills"/>
            <div className="skills-content">
                <div>   
                    <i className="arrow-down projects-grid-sub">
                        <img src={arrow} alt="arrow" className="arrow-down-img" />
                    </i>
                </div>
                <ul>
                    <li>Professional</li>
                    <li>UI Design</li>
                    <li>Visual Design</li>
                    <li>UX Research</li>
                    <li>Empathy</li>
                    <li>Design Thinking</li>
                    <li>Usability Testing</li>
                </ul>
                <ul>
                    <li>Personal</li>
                    <li>Leadership</li>
                    <li>Team Work</li>
                    <li>Honesty</li>
                    <li>Progamatsm</li>
                    <li>Detail Oriented</li>
                    <li>Communication</li>
                </ul>
            </div>
        </section>
     );
}
 
export { Skills };
const Tools = () => {
    return (
        <section className="tools">
            <Headers
                no={'08'}
                text="tools" />
            <div className="tools-image">
                <span><b><img src={Figma} alt="figma" /> </b> Figma </span>
                <span><b><img src={AdobeXD} alt="Adobe XD" /> </b>Adobe XD</span>
                <span><b><img src={Photoshop} alt="Adobe Photoshop" /> </b> Adobe Photoshop</span>
                <span><b><img src={Illustrator} alt="Adobe Illustrator" /> </b>Adobe Illustrator </span>
                <span><b><img src={Blender} alt="Blender" /></b> Blender</span>
                <span><b><img src={Corel} alt="Corel Draw" /></b> Corel Draw</span>
            </div>
        </section>
    );
}

export { Tools };

const HorizontalMoving = () => {
    return ( 
        <div className="horizontal-moving">
            <span className="ilyas">BEHANCE x 30 </span><span className="camar">-</span><span className="camar"> UI/UX DESIGN,</span><span className="camar">-</span><span className="ilyas"> DIGITAL ART </span><span className="camar">-</span><span className="camar"> BEHANCE  </span><span className="camar">-</span><span className="camar"> UI/UX DESIGN</span>
        </div>
     );
}
 
export  { HorizontalMoving };
const Certificates = () => {
    return (
        <section className="certificates">
            <i className="arrow-down projects-grid-sub">
                <img src={arrow} alt="arrow" className="arrow-down-img" />
            </i>
            <div className="certificates-test">
                <h1>Certifications</h1>
                <div>
                    <p>UI/UX Design</p>
                    <small>Malhub, 2021</small>
                    <p>Google UX Deign <br /> Certificate Course</p>
                    <small>Coursera, 2022</small>
                    <p>HND. Civil Engineering </p>
                    <small>Kwara State Polytechnic, Ilorin, 2023</small>
                </div>
            </div>
        </section>
    )
}

export { Certificates }

const WorkExperience = () => {
    return (
        <section className="about-work-experience">
            <Headers
                no={"08"}
                text={"Work Experience"} />
            <div className="about-work-experience-arrow-container">
                <div>

                    <div>
                        <i className="arrow-down projects-grid-sub">
                            <img src={arrow} alt="arrow" className="arrow-down-img" />
                        </i>
                    </div>
                    <div>
                        <h1>UI/UX Designer / Ralio Art (Lagos, Nigeria)</h1>
                        <h3>AUG 2021 - PRESENT (Remote)</h3>
                        <span>

                            Collaborate with developers, content writers and managers to provide design solutions to solve user needs and business chanllanges through user research, interaction design, visual design and prototyping.
                        </span>
                        <span>
                            Updating the design system, by adding and resizing all necessary elementsthat help grow the system and improve usage making it easier to  access products.
                        </span>
                    </div>
                </div>

                <div>
                    <div>
                        <i className="arrow-down projects-grid-sub">
                            <img src={arrow} alt="arrow" className="arrow-down-img" />
                        </i>
                    </div>
                    <div>
                        <h1>UI Designer (Intern) / Sleekeasy (Lagos Nigeria)</h1>
                        <h3>AUG 2021- JAN 2022 (Remote)</h3>
                        <span>

                            Collaborate with developers, content writers and managers to provide design solutions to solve user needs and business chanllanges through user research, interaction design, visual design and prototyping.
                        </span>
                        <span>
                            Updating the design system, by adding and resizing all necessary elementsthat help grow the system and improve usage making it easier to  access products.
                        </span>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="arrow-down projects-grid-sub">
                            <img src={arrow} alt="arrow" className="arrow-down-img" />
                        </i>
                    </div>
                    <div>
                        <h1>UI Designer (Intern) / Sleekeasy (Lagos Nigeria)</h1>
                        <h3>AUG 2021- JAN 2022 (Remote)</h3>
                        <span>
                            Created the company's first website and mobile application. <br />
                            Proposed several solutions around products. <br />
                            Created design system for web and mobile application. <br />
                            Designed pitch deck that has won several grants and partnerships. <br />
                            Currently consulting for OpenSafari.

                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { WorkExperience };