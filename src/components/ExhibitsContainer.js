import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ExhibitCard from './ExhibitCard';
import ny_movie from '../media/new_york_movie.jpg';
import monet from '../media/monet.jpg';
import hope1 from '../media/hoope1.jpg';
import summer from '../media/summer-evening.jpg'

import louvre from '../media/louvre.jpg';
import acropolis from '../media/acropolis.jpg'
import Typography from '@material-ui/core/Typography';


var descriptions = ["The Van Gogh Museum is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South.",
                    "The Louvre or the Louvre Museum is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet).",
                    "The Acropolis Museum (Greek: Μουσείο Ακρόπολης, Mouseio Akropolis) is an archaeological museum focused on the findings of the archaeological site of the Acropolis of Athens. The museum was built to house every artifact found on the rock and on the surrounding slopes, from the Greek Bronze Age to Roman and Byzantine Greece. It also lies over the ruins of a part of Roman and early Byzantine Athens."                  
                  ]

const exhibitTest = {
  title: 'Title',
  description: 'Description',
  photo: monet
}





function CardsContainer() {

  // console.log('set exhibit...');
  // const API_URL = 'http://localhost:3003/exhibits'
  // let headers = new Headers();
  // headers.append('Accept', 'application/json');
  // fetch(API_URL, {
  //   method: 'GET',
  //   headers: headers
  // })
  // .then(res => res.json())
  // .then((data) => {
  //   console.log("before")
  //   // console.log(data)
  //   console.log("After")
  //   return data
  // })
  //.then((response) => {
  //  console.log(response)
  //  console.log(response.json())
  //})
  //.catch((error) => console.log("Error: " + error.message))

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
            <Typography gutterBottom color="primary" variant="h1" component="h1">
              exhibits.
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
//             exhibits.
//           </Typography>
//         </Grid>
//         <Grid container spacing={1} direction='row' justify='center'>
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = 'Rain' 
//                 creator = 'Claude Oscar Monet'
//                 description = {descriptions[2].substring(0, 250) + "..."}
//                 imagsrc = "https://www.normandythenandnow.com/wp-content/uploads/2017/12/fishermans-cottage-varengaville-monet-881x509.jpg"
//               />
//             </Grid> 
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = {exhibitData[2].name}
//                 creator = {exhibitData[2].creator}
//                 description = {exhibitData[2].description.substring(0, 220) + "..."}
//                 type = {exhibitData[2].type}
//                 imagsrc = {exhibitData[2].photo}               
//             />
//             </Grid> 
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = {exhibitData[0].name}
//                 creator = {exhibitData[0].creator}
//                 description = {exhibitData[0].description.substring(0, 220) + "..."}
//                 type = {exhibitData[0].type}
//                 imagsrc = {exhibitData[0].photo}               
//                 />
//             </Grid>
//             <Grid item spacing={2}> 
//               <ExhibitCard 
//                 title = {exhibitData[1].name}
//                 creator = {exhibitData[1].creator}
//                 description = {exhibitData[1].description.substring(0, 220) + "..."}
//                 type = {exhibitData[1].type}
//                 imagsrc = {exhibitData[1].photo}               
//                 />
//             </Grid> 
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = {exhibitData[3].name}
//                 creator = {exhibitData[3].creator}
//                 description = {exhibitData[3].description.substring(0, 220) + "..."}
//                 type = {exhibitData[3].type}
//                 imagsrc = {exhibitData[3].photo}          
//               />
//             </Grid>
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = {exhibitData[5].name}
//                 creator = {exhibitData[5].creator}
//                 description = {exhibitData[5].description.substring(0, 220) + "..."}
//                 type = {exhibitData[5].type}
//                 imagsrc = {exhibitData[5].photo}          
//               />
//             </Grid>
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = {exhibitData[4].name}
//                 creator = {exhibitData[4].creator}
//                 description = {exhibitData[4].description.substring(0, 220) + "..."}
//                 type = {exhibitData[4].type}
//                 imagsrc = {exhibitData[4].photo}          
//               />
//             </Grid> 
            
//             <Grid item spacing={2}>
//               <ExhibitCard 
//                 title = 'Summer Evening' 
//                 creator = 'Edward Hopper'
//                 image = {summer}
//                 description = {descriptions[2].substring(0, 250) + "..."}
//               /> 
//             </Grid> 
//         </Grid>
//       </Grid>
//     </div>
// );

}

export default CardsContainer;