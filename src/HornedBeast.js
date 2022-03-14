import React from 'react'; 

class HornedBeast extends React.Component{
  render(){
    console.log(this.props); 
    return (
          <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageURL} alt="" title={this.props.title}></img>
            <p>{this.props.description}</p>
          </>
    )
  }
}

export default HornedBeast; 