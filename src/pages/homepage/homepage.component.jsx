import './homepage.styles.scss';
import MenuContainer from '../../components/menu-container/menu-container.component'

const Homepage = () =>{
    return (
        <div className="section-container">
            <div className="sections" id="home">

            </div>
            <div className="sections" id="academics">
                <MenuContainer/>
            </div>
            <div className="sections" id="why-us">
                <div className="section-heading">why us</div>
            </div>
            <div className="sections" id="about-us">
                <div className="section-heading">about us</div>
            </div>
            <div className="sections" id="contact-us">
                <div className="section-heading">contact us</div>
            </div>
        </div>
    )
}

export default Homepage;