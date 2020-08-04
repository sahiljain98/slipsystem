import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import './Detailform.css';


class DetailForm extends React.Component{
        constructor(props){
        super(props);
        this.state={ 
            user:{},
        };
    }

   componentDidMount(){
       console.log(this.props)
       const { match } = this.props;
       const {params} = match
       

        axios.get(`https://us-central1-nishad-api.cloudfunctions.net/webApi/api/v1/get/slip/${params.id}`)
        .then(response => {
            console.log(response);
            this.setState({user: response.data});
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render(){
        const {user } = this.state; 
        return(
            <div class="detail_info">
                <h1 class="heading_h1">Details:</h1>
                <div class="detail_data">
                    <h1>Product Name:{user.name}</h1>  
                    <h1>Product Brand:{user.brand} </h1>
                    <h1>Product Quality:{user.quality} </h1>
                    <h1>Product Price :{user.price}</h1>
                </div>

            </div>
        )
    }
}
DetailForm.propTypes ={};

export default DetailForm;