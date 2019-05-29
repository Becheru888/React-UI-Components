import React from 'react';
import './Header.css';
import './ImageThumbnail';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


function HeaderContainer(){
    return (
        <div className='header'>
            <ImageThumbnail/>
            <div className='title-content'>
            <HeaderTitle/>
            <HeaderContent/>
            </div>
        </div>       
        )
}


export default HeaderContainer

