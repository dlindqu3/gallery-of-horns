import React from 'react'; 
import './App.css';
import Header from './header.js'; 
import Main from './main.js'; 
import Footer from './footer.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import data from './data.json';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      showModal: false
    };
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  openModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description
    });
  };

  render(){
    return (
      <>
        <Header/>

        <Main
        data={data}
        openModal={this.openModal}
        
        /> 

        <Footer/> 


        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.state.description}
            {/* <img src={this.state.image_url}></img>  */}
            <Image id="big_image" src={this.state.image_url} alt={this.props.description}/>
          </Modal.Body>

          {/* <Modal.Footer>
            {this.state.description}
          </Modal.Footer> */}

        </Modal>
      </>
    );
  }
}



export default App;
