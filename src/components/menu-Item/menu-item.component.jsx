import React from 'react';

import './menu-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const MenuItem = ({name, imageUrl ,buttonName , desc}) => {
    return (
        <div className="menu-item">
            {imageUrl ?  <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div> :''}
            <div className="content-container">
                <h3>{name}</h3>
                <small>{desc}</small>
            </div>
            <div className="button">
                <CustomButton children={buttonName}/>
            </div>
        </div>
    )
}

export default MenuItem;