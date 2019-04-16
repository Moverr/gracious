import React from 'react';
import PropTypes from 'prop-types';
import BUTTONA from './BUTTONA'; 


class Catter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: " hey Lord is Merciful"
    };
    // this.handleClickMe = this.handleClickMe.bind(this);
  }

   handleClickMe=(testme)=>{

     this.setState({message:testme});
  }

  render() {
    return (
      <div><h1> {this.state.message} </h1>
      <BUTTONA callBackParent={this.handleClickMe} />
      
      </div>
    );
  }
}


export default Catter;