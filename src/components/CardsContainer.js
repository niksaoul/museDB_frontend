import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MuseumCard from './MuseumCard';
import vanGoghImage from '../media/Van-Gogh-Museum.jpg';
import louvre from '../media/louvre.jpg';
import acropolis from '../media/acropolis.jpg'
import Typography from '@material-ui/core/Typography';


// var descriptions = ["The Van Gogh Museum is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South.",
//                     "The Louvre or the Louvre Museum is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet).",
//                     "The Acropolis Museum (Greek: Μουσείο Ακρόπολης, Mouseio Akropolis) is an archaeological museum focused on the findings of the archaeological site of the Acropolis of Athens. The museum was built to house every artifact found on the rock and on the surrounding slopes, from the Greek Bronze Age to Roman and Byzantine Greece. It also lies over the ruins of a part of Roman and early Byzantine Athens."                  
//                   ]




function CardsContainer() {
  
  
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
console.log(museumData)

const API_URL = 'http://localhost:3003/museums'

React.useEffect(() => {
  async function fetchMuseumData() {
    var data = await fetch(API_URL)
    .then(res => {
      return res.json();
    })
    .catch((error) => console.log("Error: " + error.message));
    console.log('async')
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
        />
      </Grid>  
    )
  })           

return (
  <div>
      <Grid container
        justify="center"
        alignItems="center"
        spacing={1}>
        <Grid container justify='center'>
          <Typography gutterBottom color="primary" variant="h1" component="h1">
            museums.
          </Typography>
        </Grid>
        {listitems}
      </Grid>
  </div>
)

//   return (
//     <div>
//       <Grid container
//             justify="center"
//             alignItems="center"
//             spacing={1}>
//         <Grid container justify='center'>
//         <Typography gutterBottom color="primary" variant="h1" component="h1">
//             museums. 
//           </Typography>
//         </Grid>
//         <Grid container spacing={3} direction='row' justify='center'>
//             <Grid item spacing={1}>
//               <MuseumCard 
//                 title = 'Van Gogh Museum'
//                 description = {descriptions[0]}
//                 image = {vanGoghImage}
//                 />
//             </Grid>
//             <Grid item spacing={1}>
//               <MuseumCard 
//                 title = 'Louvre Museum' 
//                 image = {louvre}
//                 description = {descriptions[1].substring(0, 250) + "..."}
//               />
//             </Grid>
//             <Grid item spacing={1}>
//               <MuseumCard 
//                 title = 'Acropolis Museum' 
//                 image = {acropolis}
//                 description = {descriptions[2].substring(0, 250) + "..."}
//               />
//             </Grid>
//             <Grid item spacing={1}>
//               <MuseumCard title = 'Gallery of Modern and Contemporary Art'/>
//             </Grid>
//             <Grid item spacing={1}>
//               <MuseumCard title = 'Gallery of Modern and Contemporary Art'/>
//             </Grid>
//             <Grid item spacing={1}>
//               <MuseumCard title = 'Gallery of Modern and Contemporary Art'/>
//             </Grid>
//         </Grid>
//       </Grid>
//     </div>
// );

}

export default CardsContainer;