import './App.css';
import Container from '@material-ui/core/Container';
import ExhibitsContainer from './components/ExhibitsContainer';

function Exhibitions() {
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
    </Container>
  );
}



export default Exhibitions;

 


