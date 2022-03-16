import React from 'react'; 
import './HornedBeast.css'; 
// import Container from 'react-bootstrap/Container'; 

class HornedBeast extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
        clicks: 0,
        favorited: false
    }
  }

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  hasBeenFavorited = () => {
     this.setState({
       favorited: true
     })
  }

  render(){
    console.log(this.props); 
    console.log(this.state); 
    return (
          <>
          <article>
            <h2>{this.props.title}</h2>
            <img src={this.props.image_url} 
            alt="" 
            title={this.props.title}
            onClick={this.handleClicks}
            ></img>
            <p>{this.props.description}</p>
            <p>❤️{this.state.clicks}</p>
          </article>
          </>
    )
  }
}

export default HornedBeast; 