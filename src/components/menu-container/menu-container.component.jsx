import React from 'react';

import './menu-container.styles.scss';
import MenuItem from '../menu-Item/menu-item.component';

class MenuContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items :[
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
    }
}
    render() {
        return (
            <div className="menu-container">
                <div className ="heading">
                    Academics
                </div>
                <div className="menu-items">
                    {this.state.items.map((item)=>{
                        return(<MenuItem key={item.id} {...item}/>)
                    })}
                </div>
            </div>
        )
    }
}

export default MenuContainer;