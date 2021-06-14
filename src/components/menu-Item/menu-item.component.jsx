import React from 'react';

import './menu-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { Link,useHistory } from 'react-router-dom';

const MenuItem = (props) => {
    const {name, imageUrl ,buttonName , desc, id ,link} = props;
    return (
        <div className="menu-item">
            {imageUrl ?  <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div> :''}
            <div className="content-container">
                <h3>{name}</h3>
                <small>{desc}</small>
            </div>
            <div className="button">
            <Link to={{
                    pathname:`${link}/${id}`,
                    state:'/'
                }}><CustomButton>{buttonName}</CustomButton></Link>
            </div>
        </div>
    )
}

export default MenuItem;