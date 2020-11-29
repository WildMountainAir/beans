import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <Container>
        <Jumbotron fluid>
          <Container>
            <h1>Beans Affirmations</h1>
            <p>We talk to ourselves through our thoughts and inner monologue more than anyone else talkes to us. It is no wonder our thoughts play a large role in our overall success and happiness. It is so important to find ways to improve our mindset and speak kindly to ourselves, least risk falling into negative thought patterns.</p>
            <p>Affirmations are a powerful way to improve your mindset on a daily basis, and research has shown they can increase our feelings of self-worth.</p>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
