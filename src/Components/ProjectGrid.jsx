import arrow from "../images/Vector 1.png"

const ProjectGrid = (props) => {
    return (
        <div className="project-grid-container">

            <section className="projects-grid">
                <div className="I4G projects-grid-sub">
                    <h1 className="imgheader">{props.heading1}</h1>
                    <img src={props.image1} alt="14G" />
                    <p>{props.about1}<br />{props.source1}<span>{props.year1}</span></p>
                </div>
                <div className="magverse projects-grid-sub">
                    <h1 className="imgheader">{props.heading2}</h1>
                    <img src={props.image2} alt="magverse" />
                    <p>{props.about2}<br />{props.source2}<span>{props.year2}</span></p>
                </div>
                <i className="arrow-down projects-grid-sub">
                    <img src={arrow} alt="arrow" className="arrow-down-img" />
                </i>
                <i className="arrow-down-right projects-grid-sub">
                    <img src={arrow} alt="arrow" className="arrow-down-right-img" />
                </i>
                <div className="nft projects-grid-sub">
                    <h1 className="imgheader">{props.heading3}</h1>
                    <img src={props.image3} alt="14G" />
                    <p>{props.about3}<br />{props.source3}<span>{props.year3}</span></p>
                </div>
                <div className="restaurant projects-grid-sub">
                    <h1 className="imgheader">{props.heading4}</h1>
                    <img src={props.image4} alt="magverse" />
                    <p>{props.about4}<br />{props.source4}<span>{props.year4}</span></p>
                </div>
                <div className="car projects-grid-sub">
                    <h1 className="imgheader">{props.heading5}</h1>
                    <img src={props.image5} alt="14G" />
                    <p>{props.about5}<br />{props.source5}<span>{props.year5}</span></p>
                </div>
                <i className="arrow-bottom">
                    <img src={arrow} alt="arrow" className="arrow" />
                </i>
                <div className="elearn projects-grid-sub">
                    <h1 className="imgheader">{props.heading6}</h1>
                    <img src={props.image6} alt="magverse" />
                    <p>{props.about6}<br />{props.source6}<span>{props.year6}</span></p>
                </div>
            </section>
        </div>
    );
}

export default ProjectGrid;