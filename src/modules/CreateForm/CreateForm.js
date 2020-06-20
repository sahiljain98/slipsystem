import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default class CreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {name: '',brand: '',quality: '',price: ''};
  }

  handleChangename=(event)=>{
    this.setState({name: event.target.value});
  }
  handleChangebrand=(event)=>{
    this.setState({brand: event.target.value});
  }
  handleChangequality=(event)=>{
    this.setState({quality: event.target.value});
  }
  handleChangeprice=(event)=>{
    this.setState({price: event.target.value});
  }

  handleSubmit=(event)=>{
    alert('Product Details: '+ this.state.name + this.state.brand + this.state.quality + this.state.price);
    event.preventDefault(); 
  
    axios.post('https://us-central1-nishad-api.cloudfunctions.net/webApi/api/v1/add/slip',({name:this.state.name,brand:this.state.brand,quality:this.state.quality,price: this.state.price}))
    .then(res =>{
      console.log(res);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h1>Create Form</h1>
        <p>Product name:</p>
        <input type="text" placeholder="Product Name" name="name" value={this.state.name} onChange={this.handleChangename} />
        <p>Product Brand:</p>
        <input type="text" placeholder="Product Brand" name="brand" value={this.state.brand} onChange={this.handleChangebrand}/>

        <p>Product Quality:</p>
        <input type="text" placeholder="Product Quality" name="quality" value={this.state.quality} onChange={this.handleChangequality}/>
        
        <p>Product Price:</p>
        <input type="text" placeholder="product Price" name="price" value={this.state.price} onChange={this.handleChangeprice}/>
        
        <input  type="submit" value="Submit"/> 
      </form>);
    
  }
}
CreateForm.propTypes = {};

