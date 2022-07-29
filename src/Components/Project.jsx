import Headers from './Headers';
import ProjectGrid from './ProjectGrid';
import IFG from '../images/14G.png';
import Magverse from '../images/Magverse.png';
import NFT from '../images/NFT.png';
import Restaurant from '../images/Restaurant.png';
import Car from '../images/CarPack.png';
import ELearn from '../images/E-learn.png';
const Projects = () => {
	return (
		<section className="projects-props" >
			<Headers no={'02'} text={'recent projects'} />
			<ProjectGrid
				link1={'https://www.behance.net/gallery/140665139/I4G-landing-page'}
				link2={
					'https://www.behance.net/gallery/141034043/MetaVerse-Landing-Page'
				}
				link3={''}
				link4={
					'https://www.behance.net/gallery/148885003/Food-Ordering-Website'
				}
				link5={'https://www.behance.net/gallery/140681963/Parking-App'}
				link6={
					'https://www.behance.net/gallery/140663029/E-learning-landing-page'
				}
				image1={IFG}
				image2={Magverse}
				image3={NFT}
				image4={Restaurant}
				image5={Car}
				image6={ELearn}
				heading1={'14G'}
				heading2={'Magverse'}
				heading3={'NFT'}
				heading4={'Restaurant'}
				heading5={'Car Park'}
				heading6={'E-Learn'}
				about1={'14G Website'}
				about2={'Magverse Website'}
				about3={'Magnificient NFT'}
				about4={"Folk's Food Website"}
				about5={'Parking App'}
				about6={'E-learning Website'}
				source1={'Landing page'}
				source2={'Landing Page'}
				source3={'Landing page'}
				source4={'Landing page'}
				source5={'Mobile App'}
				source6={'Landing page'}
				year1={'2021'}
				year2={'2022'}
				year3={'2022'}
				year4={'2021'}
				year5={'2021'}
				year6={'2021'}
			/>
			<section className="all-container">
				<div className="all">
					<a
						href="https://www.behance.net/abubakaqoreebu"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button>All Projects</button>
					</a>
				</div>
			</section>
		</section>
	);
};

export default Projects;
