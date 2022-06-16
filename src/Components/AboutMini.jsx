import Headers from "./Headers";
import profile from "../images/Qoreeb Picture.png"
const AboutMini = () => {
    return (
        <div className="about">
            <Headers
                no={'03'}
                text={'About Me'}
            />
            <div className="about-absolute-container">

                <p className="about-text">
                    I love Design, Art, and Technology.
                    I'm a Product designer specialized in creating seamless user experiences and digital user interfaces. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
                </p>
                <div className="about-img-container">
                    <img src={profile} alt="profile" />
                    <div>
                        <p>I am happy to present my new website  As before I am open for new projects worldwide!</p>
                        <p>Would you like to have award winning site or unique design style, please say hi to me —<a href="mailto:qoribullahabubakar@gmail.com">qoribullahabubakar@gmail.com</a>And I will help you with the pleasure.</p>
                    </div>
                </div>
                <section className="about-absolute">
                    <div>
                        <p>Awwwards x16</p>
                        <span>OTM, SOTD and Horrible Mentions</span>
                    </div>
                    <div>
                        <p>FWA x5</p>
                        <span>FWA of The Day</span>
                    </div>
                    <div>
                        <p>Behance x30</p>
                        <span>UIU/UX, Digital Arts</span>
                    </div>
                    <div>
                        <p>The Very Best Of x4</p>
                        <span>The Very Best Of, Best Of</span>
                    </div>
                </section> 
            </div>
        </div>
    );
}

export default AboutMini;