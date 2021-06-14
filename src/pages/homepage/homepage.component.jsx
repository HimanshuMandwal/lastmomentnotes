import './homepage.styles.scss';
import MenuContainer from '../../components/menu-container/menu-container.component'
import React from 'react';
const DATA =[
        {
            id : 1,
            name :'Computer Science',
            url : 'sub/cs',
            imageUrl : 'https://indoreinstitute.com/wp-content/uploads/2019/10/18971.jpg',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 2,
            name :'Civil Engineering',
            url : 'sub/cs',
            imageUrl : 'https://leverageedu.com/blog/wp-content/uploads/2020/07/PhD-in-Civil-Engineering.png',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 3,
            name :'Electronics and telecomunication',
            url : 'sub/cs',
            imageUrl : 'https://leverageedu.com/blog/wp-content/uploads/2020/06/BE-Electronics.jpg',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 4,
            name :'Mechanical Engineering',
            url : 'sub/cs',
            imageUrl : 'https://www.clipartkey.com/mpngs/m/258-2583242_electronics-engineers-cartoon-png.png',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 5,
            name :'Electrical Engineering',
            url : 'sub/cs',
            imageUrl : 'https://previews.123rf.com/images/vectorlab/vectorlab1903/vectorlab190300439/123179841-electrical-utility-delivery-of-energy-to-consumer-electricity-transmission-and-distribution-characte.jpg',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 6,
            name :'Electronicls & instrumentation',
            url : 'sub/cs',
            imageUrl : 'https://cdn.imgbin.com/22/18/6/imgbin-electronics-engineering-naprawa-flat-design-design-NeMU25GCeVW00eE0pv5vRvE7H.jpg',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 7,
            name :'Information Technology',
            url : 'sub/cs',
            imageUrl : 'https://leverageedu.com/blog/wp-content/uploads/2019/12/Bachelor-of-Information-Technology-800x500.png',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 8,
            name :'Biomedical Engineering',
            url : 'sub/cs',
            imageUrl : 'https://leverageedu.com/blog/wp-content/uploads/2020/05/Biomedical-Engineering-800x500.png',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
        {
            id : 9,
            name :'Industrial Production',
            url : 'sub/cs',
            imageUrl : 'https://media.istockphoto.com/vectors/industrial-factory-production-process-concept-tiny-people-cartoon-in-vector-id1221723392?k=6&m=1221723392&s=170667a&w=0&h=-Ivw_WqOxQQETlXuLnUbLw3jjyFaX8RSwpRpoj1abr4=',
            desc: 'Department of Computer Science & Engineering',
            buttonName: 'Go'
        },
    ]

class Homepage extends React.Component
{
    constructor(){
        super();
        this.state = {
            items:DATA,
        }

    }
   render ()
    { return (
            <div className="section-container">
                <div className="sections" id="home">

                </div>
                <div className="sections" id="academics">
                    <MenuContainer items={this.state.items} title={'Academics'} link='branch'/>
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
}

export default Homepage;