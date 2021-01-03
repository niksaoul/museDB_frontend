import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    const size = {
    width: '100%',
    height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (
    <nav>
        <Typography gutterBottom variant="h3" component="h2" color="secondary">
        museDB
        </Typography>          
            <ul className = "nav-links">
            <Link style={navStyle} to="/home">
                <Typography gutterBottom variant="h5" component="h2" color="secondary">
                about.
                </Typography>               
            </Link>
            <Link style={navStyle} to="/museums">
                <Typography gutterBottom variant="h5" component="h2" color="secondary">
                museums.
                </Typography>               
            </Link>
            <Link style={navStyle} to="/exhibits">
                <Typography gutterBottom variant="h5" component="h2" color="secondary">
                exhibits.
                </Typography>               
            </Link>
            <Link style={navStyle} to="/creators">
                <Typography gutterBottom variant="h5" component="h2" color="secondary">
                creators.
                </Typography>               
            </Link>
       
        </ul>
    </nav>
    );
}



export default Nav;

 


