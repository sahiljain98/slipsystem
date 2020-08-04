import React from 'react';
import {withRouter} from 'react-router-dom';

import './ListPost.css';

const listpost = (props) =>{
    console.log(props);
    return(
        <article className="ListPost" onclick={props.clicked}>
            <p>
                 Product Name : {props.name},
                Product Brand : {props.brand}, 
                Product Quality : {props.quality} , 
                Product Price : {props.price}

            </p>
        </article>    
    );
} 
export default withRouter(listpost);