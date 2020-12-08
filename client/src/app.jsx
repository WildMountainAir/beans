import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import BeansCarousel from './components/beansCarousel.jsx';

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <Container>
        <Jumbotron fluid>
          <Container>
            <img src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Long.png" alt="beans logo" className="header-logo"/>
            <p className="beans-intro">We talk to ourselves through our thoughts and inner monologue more than anyone else talkes to us. It is no wonder our thoughts play a large role in our overall success and happiness. It is so important to find ways to improve our mindset and speak kindly to ourselves, least risk falling into negative thought patterns. Research has shown affirmations can increase our feelings of self-worth, that&apos;s where beans come in! Beans are a powerful way to improve your mindset on a daily basis.</p>
          </Container>
        </Jumbotron>
        <BeansCarousel />
      </Container>
    </div>
  );
}

export default App;
