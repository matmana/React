
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AppFadeIn from './components/FadeIn'
import HomeScreen from "./screens/HomeScreen";
import { Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';
import { text } from '@fortawesome/fontawesome-svg-core';



function App() {
  return (
    <div>
      
      <Header />
      <main className="py-3">
        <Container className='content-custom'>
        <Alert  variant='danger'>
          Best offers only in our website
        </Alert>    
          <HomeScreen />
        </Container>
        <AppFadeIn />
      </main>
      <Footer />
    </  div>

  );
}

export default App;
