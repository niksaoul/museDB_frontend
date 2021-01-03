import './App.css';
import Container from '@material-ui/core/Container';
import CreatorsContainer from './components/CreatorsContainer';

function Creators() {
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
      <CreatorsContainer />
    </Container>
  );
}



export default Creators;

 


