import React from 'react'; 
import HornedBeast from './HornedBeast.js'; 
import './main.css'; 
import data from './data.json'; 

class Main extends React.Component{
  render(){
    let allBeasts = [];
    data.forEach((beast, index) => {
      allBeasts.push(
          <HornedBeast
          image_url={beast.image_url}
          title={beast.description}
          description={beast.description}
          />
      )
    })
  
    return (
    
      <main>
        {allBeasts}
      </main>

      // <HornedBeast
      //     title="Rhino Family"
      //     imageURL="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
      //     description="Parent rhino with two babies"
      //     imageAlt="picture of some rhinos"
      // />
      
    )
  }
}

export default Main; 