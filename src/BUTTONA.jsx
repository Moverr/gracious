import React from 'react';
  class BUTTONA extends React.Component {

    handleClick =()=>{
        this.props.callBackParent('Lord is Merciul all the way ');
    }
  render() {
    return (<div>
      <button onClick={this.handleClick}>CLICK ME </button>
    </div>);
  }
}

export default BUTTONA;