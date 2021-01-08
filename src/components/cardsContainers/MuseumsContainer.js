import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MuseumCard from '../cards/MuseumCard';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import SearchBar from "material-ui-search-bar";

function MuseumsContainer() {
  
  
  const originalMuseum = 
  [
    {
      "name": "Test",
      "description": "Description",
      "type": "Type",
      "imagsrc": "https://www.animationvideo.co/wp-content/uploads/2017/12/How-to-video.jpg"
    }
  ]

const [museumData, setMuseumData] = useState(originalMuseum); 
const [searchText, setSearchText] = useState("");

// console.log(museumData)

const API_URL = 'http://localhost:3003/museums'

React.useEffect(() => {
  async function fetchMuseumData() {
    var data = await fetch(API_URL)
    .then(res => {
      return res.json();
    })
    .catch((error) => console.log("Error: " + error.message));
    // console.log('async')
    setMuseumData(data);
    console.log(museumData[0]);
  }
  fetchMuseumData();
}, []);


  const listitems = museumData.map( (museumData) => 
  {
    return(
      <Grid item spacing={2}>
        <MuseumCard 
          title = {museumData.name}
          description = {museumData.description.substring(0, 150) + "..."}
          imagsrc = {museumData.photo}
          type = {museumData.type}
          museumID = {museumData.id}
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
      spacing={1}>
      <Grid item spacing={2} xs={12} alignItems="center">
        <Typography color="textPrimary" variant="h1" component="h1" align="center">
          museums.
        </Typography>
      </Grid>
      <Grid item spacing={2} xs={10}>
        <SearchBar
          value={searchText}
          onChange={(newValue) => setSearchText(newValue)}
          onRequestSearch={() => console.log(searchText)}
        />
      </Grid>
      <Grid item spacing={2}>
        <Link style={linkStyle} to="/addmuseum">
            <Typography gutterBottom variant="h5" component="h5" color="textSecondary">
            are you a museum employee? click here to add your museum's info to our database.
            </Typography>               
        </Link>
      </Grid>
      {listitems}
    </Grid>
  </div>
)
}

export default MuseumsContainer;