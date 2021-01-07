import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CreatorCard from '../cards/CreatorCard';
import Typography from '@material-ui/core/Typography';
import SearchBar from "material-ui-search-bar";


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
  const [searchText, setSearchText] = useState("");

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
            creatorID = {creatorData.id}
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
          <Grid item spacing={2} xs={12} alignItems="center">
            <Typography gutterBottom color="textPrimary" variant="h1" component="h1" align="center">
              creators.
            </Typography>
          </Grid>
          <Grid item spacing={2} xs={10}>
            <SearchBar
              value={searchText}
              onChange={(newValue) => setSearchText(newValue)}
              onRequestSearch={() => console.log(searchText)}
            />
          </Grid> 
          {listitems}
        </Grid>
    </div>
  )
}

export default CreatorsContainer;