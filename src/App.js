import React from 'react'; 
import './App.css';
import Header from './header.js'; 
import Main from './main.js'; 
import Footer from './footer.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import data from './data.json';
import SelectedBeast from './selectedBeast';


let numHorns = [1, 2, 3, 100]; 

// console.log(data); 

// let twoHorns = data.filter(obj => obj["horns"] === 2 );

// console.log('data with 2 horns: ', twoHorns); 

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      showModal: false,
      numHorns: numHorns,
      data: data
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

  // handleHorns = (event) => {
  //   this.setState({
  //     numHorns: event.target.value
  //   });
  // };

  handleSelect = (e) => {
    console.log(e.target.value);
    let selected = e.target.value;

  // 1, 2, 3, 100
    if (selected === '1') {
      console.log('selected 1');
      let newHorns = numHorns.filter(num => num === 1);
      this.setState({ numHorns: newHorns });
    } else if (selected === '2') {
      console.log('selected 2');
      let newHorns = numHorns.filter(num => num === 2);
      this.setState({ numHorns: newHorns });
    } else if (selected === '3') {
      console.log('selected 3');
      let newHorns = numHorns.filter(num => num === 3);
      this.setState({ numHorns: newHorns });
    } else if (selected === '100'){
      console.log('selected 100');
      let newHorns = numHorns.filter(num => num === 100);
      this.setState({ numHorns: newHorns });
    } else if (selected === 'all'){
      console.log('selected all'); 
      this.setState({numHorns: [1, 2, 3, 100]})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    console.log( `number of horns for filter submitted: ${this.state.numHorns}`);
    console.log('this.state.numHorns at time of submit: ', this.state.numHorns);
    
    let newData; 

    if(this.state.numHorns[1]){
      newData = data; 
    } else {
      newData = data.filter(obj => obj["horns"] === this.state.numHorns[0]);
    }
    console.log('filtered data, now called newData: ', newData); 
    this.setState({data: newData }); 
    console.log('updated data state after submit: ', data); 
  }

  render(){
    return (
      <>
        <Header/>

        <Form onSubmit={this.handleSubmit}>

              <Form.Group >
                <Form.Select name="selected" onChange={this.handleSelect}>
                  <option defaultValue> -- select an option -- </option>
                  <option value="all">all</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="100">100</option>
                </Form.Select>
              </Form.Group>

              <Button type="submit">submit</Button>
            </Form>

        <Main
        data={this.state.data}
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
