
import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';



 export default class Product extends Component {

    render() {


      return (

        <Card>
            <Card.Img
            src={require('../assets/images/'+this.props.produit.img)}/>
        </Card>
    )
}
  }