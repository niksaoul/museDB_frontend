import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ExhibitCard from './ExhibitCard';
import monet from '../media/monet.jpg';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const exhibitTest = {
  title: 'Title',
  description: 'Description',
  photo: monet
}

function CardsContainer() {

  const originalExhibit = 
    [
      {
        "name": "Test",
        "creator": "Creator",
        "description": "Description",
        "type": "Type",
        "imagsrc": "https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
      }
    ]
  
  const [exhibitData, setExhibitData] = useState(originalExhibit); 
  console.log(exhibitData)

  const API_URL = 'http://localhost:3003/exhibits'

  React.useEffect(() => {
    async function fetchExhibitData() {
      var data = await fetch(API_URL)
      .then(res => {
        return res.json();
      })
      .catch((error) => console.log("Error: " + error.message));
      console.log('async')
      setExhibitData(data);
      console.log(exhibitData[0]);
    }
    fetchExhibitData();
  }, []);


    const listitems = exhibitData.map( (exhibitData) => 
    {
      return(
        <Grid item spacing={1}>
          <ExhibitCard 
            title = {exhibitData.name}
            creator = {exhibitData.creator}
            description = {exhibitData.description.substring(0, 150) + "..."}
            type = {exhibitData.type}
            imagsrc = {exhibitData.photo} 
            exhibitID = {exhibitData.id}              
          />
        </Grid>  
      )
    })      
    
    const linkStyle = {
      textDecoration: 'none'
  }
  
  return (
    <div>
        <Grid container
          justify="center"
          alignItems="center"
          spacing={2}>
          <Grid container justify='center'>
            <Typography gutterBottom color="textPrimary" variant="h1" component="h1">
              exhibits.
            </Typography>
            <br/>
            <Link style={linkStyle} to="/addexhibit">
              <Typography gutterBottom variant="h5" component="h5" color="secondary">
                are you a museum employee? please click here to add a new exhibit in our database.    
              </Typography>                
            </Link>
          </Grid>
          {listitems}
        </Grid>
    </div>
  )

}

export default CardsContainer;