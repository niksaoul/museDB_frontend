import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CreatorCard from './CreatorCard';
import Typography from '@material-ui/core/Typography';


function CreatorsContainer() {

  const originalCreator = 
    [
      {
        "name": "Test",
        "bio": "Creator",
        "nationality": "nationality",
        "imagsrc": "https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
      }
    ]
  
  const [creatorData, setCreatorData] = useState(originalCreator); 
  console.log(creatorData)

  const API_URL = 'http://localhost:3003/creators'

  React.useEffect(() => {
    async function fetchCreatorData() {
      var data = await fetch(API_URL)
      .then(res => {
        return res.json();
      })
      .catch((error) => console.log("Error: " + error.message));
      console.log('async')
      setCreatorData(data);
      console.log(creatorData[0]);
    }
    fetchCreatorData();
  }, []);


    const listitems = creatorData.map( (creatorData) => 
    {
      return(
        <Grid item spacing={1}>
          <CreatorCard 
            name = {creatorData.name}
            bio = {creatorData.bio.substring(0, 250) + "..."}
            nationality = {creatorData.nationality}
            imagsrc = {creatorData.photo}               
          />
        </Grid>  
      )
    })           
  
  return (
    <div>
        <Grid container
          justify="center"
          alignItems="center"
          spacing={2}>
          <Grid container justify='center'>
            <Typography gutterBottom color="textPrimary" variant="h1" component="h1">
              creators.
            </Typography>
          </Grid>
          {listitems}
        </Grid>
    </div>
  )
}

export default CreatorsContainer;