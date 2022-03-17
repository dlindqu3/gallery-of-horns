import React from 'react'; 
import './App.css';
import Header from './header.js'; 
import Main from './main.js'; 
import Footer from './footer.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SelectedBeast from './selectedBeast';

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

        <SelectedBeast
          image_url={this.state.image_url}
          description={this.state.description}
          title={this.state.title}
          showModal={this.state.showModal}
          onHide={this.hideModal}
        >
        </SelectedBeast>
      </>
    );
  }
}



export default App;
