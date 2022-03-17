import React from 'react'; 
import './HornedBeast.css'; 
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';

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

  handleOpenModal = () => {
    this.props.openModal(this.props.title, this.props.image_url, this.props.description);
  }

  render(){
    // console.log(this.props); 
    // console.log(this.state); 
    return (
          <>
          <article>
          <Card className="h-100"> 
            <Card.Img 
              variant="top" 
              src={this.props.image_url}
              onClick={this.handleOpenModal}
            
              />
            <Card.Body>
              <Card.Title>{this.props.title}❤️{this.state.clicks}</Card.Title>
              <Card.Text>
              {this.props.description}
              </Card.Text>
                <Button 
                variant="primary"
                onClick={this.handleClicks}>Favorite</Button>
            </Card.Body>
          </Card>
          </article>
          </>
    )
  }
}

export default HornedBeast; 