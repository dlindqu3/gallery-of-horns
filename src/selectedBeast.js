import React from 'react'; 
import './selectedBeast.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component{
  // constructor(props){
  //   super(props); 
  // }

  //a constructor is typically just used to set state. If state is not needed, you don't need the constructor. 
  

    render(){
      return (
        <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <img src={this.state.image_url}></img>  */}
            <Image id="big_image" src={this.props.image_url} alt={this.props.description}/>
            <h1>{this.props.description}</h1>
          </Modal.Body>

        </Modal>

        </>
      )
    }
  }


export default SelectedBeast;  



