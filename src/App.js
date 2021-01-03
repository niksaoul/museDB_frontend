import './App.css';
import MyComponent from './components/MyComponent'
import Container from '@material-ui/core/Container';
import SpotifyPlayer from 'react-spotify-player';
import Nav from './Nav'
import Museums from './Museums'
import Exhibitions from './Exhibitions'
import Creators from './Creators'
import MuseumPage from './components/pages/MuseumPage'
import ExhibitPage from './components/pages/ExhibitPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  return (
    <div>
    <Router>
    <Container 
      style={{
        backgroundColor: '#16324F'
      }}>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/museums" exact component={Museums} />
        <Route path="/exhibits" exact component={Exhibitions} />
        <Route path="/creators" component={Creators} />
        <Route path="/test" component={MuseumPage} />
        <Route path="/museums/:id" component={MuseumPage} />
        <Route path="/exhibits/:id" component={ExhibitPage} />
      </Switch>
      {/*<MyComponent />
       <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      /> */}
    </Container>
    </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;

 


