import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {Route} from 'react-router-dom';
 
import ListPost from "../../common/components/ListPost/ListPost";
import './ListForm.css';

 class ListForm extends React.Component {
    constructor(props){
        super(props);
        this.state={ 
            user:[]
        };
    }

   componentDidMount(){
       console.log(this.props);
        axios.get('https://us-central1-nishad-api.cloudfunctions.net/webApi/api/v1/getAll/slip')
        .then(response => {
            console.log(response);
            this.setState({user: response.data});
        })
        .catch(error =>{
            console.log(error);
        })
    }


   //clickhandler

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        console.log(id)
        this.props.history.push({pathname: '/detail/'+ id});
        //this.props.history.push({ '/posts/'+ post.id});
    }
  render() {
     
    return ( 
        
       <div className="user_info" >
            <h1 className="heading">List of Product:</h1> 
            <div className="Post" >
            
                {
                this.state.user.map(user => {
                    return(
                        <div className="user_data" onClick={() => this.postSelectedHandler(user.id)}>
                            <p style={{ textAlign : 'center'}}>

                                Product Name : {user.name},
                                Product Brand : {user.brand}, 
                                Product Quality : {user.quality} , 
                                Product Price : {user.price}
                            </p>
                        </div>);}
                    )
                }
                    
                
            
           
            </div>
            
       </div>
    )    
  }
}
ListForm.propTypes = {};

export default ListForm;