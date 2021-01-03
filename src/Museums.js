import './App.css';
import MyComponent from './components/MyComponent'
import Container from '@material-ui/core/Container';
import CardContainer from './components/CardsContainer';

function Museums() {
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
      <CardContainer />
    </Container>
  );
}



export default Museums;

 


