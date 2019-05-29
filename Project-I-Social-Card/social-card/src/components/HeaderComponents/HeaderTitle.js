import React from 'react';
import './Header.css';
import { directive } from '@babel/types';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;


function HeaderTitle(){
    return  (
        <div className='headerTitle'>
        <h1>Lambda School</h1>
        <span className='data-title'>@LambdaSchool {today}</span>
        </div>
    )
}


export default HeaderTitle