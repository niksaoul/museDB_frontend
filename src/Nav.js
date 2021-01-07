import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
    <nav>
        <Typography gutterBottom variant="h3" component="h2" color="textSecondary">
        museDB
        </Typography>          
            <ul className = "nav-links">
            <Link style={navStyle} to="/home">
                <Typography gutterBottom variant="h5" component="h1" color="textSecondary">
                about.
                </Typography>               
            </Link>
            <Link style={navStyle} to="/museums">
                <Typography gutterBottom variant="h5" component="h1" color="textSecondary">
                museums.
                </Typography>               
            </Link>
            <Link style={navStyle} to="/exhibits">
                <Typography gutterBottom variant="h5" component="h1" color="textSecondary">
                exhibits.
                </Typography>               
            </Link>
            <Link style={navStyle} to="/creators">
                <Typography gutterBottom variant="h5" component="h1" color="textSecondary">
                creators.
                </Typography>               
            </Link>
       
        </ul>
    </nav>
    );
}



export default Nav;

 


