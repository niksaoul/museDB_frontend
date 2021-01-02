import './App.css';
import MyComponent from './components/MyComponent'
import Container from '@material-ui/core/Container';
import SpotifyPlayer from 'react-spotify-player';
import MuseumCard from './components/MuseumCard';
import CardContainer from './components/CardsContainer';
import ExhibitsContainer from './components/ExhibitsContainer'

function App() {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  return (
    <Container 
      style={{
        backgroundColor: '#16324F'
      }}>
      <ExhibitsContainer />
      <CardContainer />
      <MyComponent />
      {/* <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      /> */}
    </Container>
  );
}



export default App;

 


