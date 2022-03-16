import React from 'react'; 
import './App.css';
import Header from './header.js'; 
import Main from './main.js'; 
import Footer from './footer.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <Main/> 
        <Footer/> 
      </>
    );
  }
}



export default App;
