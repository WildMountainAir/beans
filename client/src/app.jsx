import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import listBeans from './lib/routes';

// import BeansCarousel from './components/beansCarousel.jsx';
import BeansList from './components/beansList.jsx';

const App = () => {
  const [beans, setAllBeans] = useState([]);
  const [viewBeans, setViewBeans] = useState(false);
  const [viewSelfLove, setViewSelfLove] = useState(false);
  const [viewConfidence, setViewConfidence] = useState(false);
  const [viewAcceptance, setViewAcceptance] = useState(false);
  const [viewGrowth, setViewGrowth] = useState(false);

  useEffect(() => {
    listBeans((error, response) => {
      error ? 'could not get beans' : setAllBeans(response);
    })
  }, []);

  const handleView = () => {
    setViewBeans(!viewBeans);
  }

  const handleSelfLove = () => {
    setViewSelfLove(!viewSelfLove);
  }

  const handleConfidence = () => {
    setViewConfidence(!viewConfidence);
  }

  const handleAcceptance = () => {
    setViewAcceptance(!viewAcceptance);
  }

  const handleGrowth = () => {
    setViewGrowth(!viewGrowth);
  }

  return (
    <div>
      <Container>
        <Jumbotron fluid>
          <Container>
            <img src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Long.png" alt="beans logo" className="header-logo"/>
            <p className="beans-intro">We talk to ourselves through our thoughts and inner monologue more than anyone else talks to us. It is no wonder our thoughts play a large role in our overall success and happiness. It is so important to find ways to improve our mindset and speak kindly to ourselves, or risk falling into negative thought patterns. That&apos;s where beans come in! Beans are a powerful way to improve your mindset on a daily basis.</p>
          </Container>
        </Jumbotron>
        <div className="category-box">
        <button className="button-root category" onClick={handleSelfLove}>Self Love</button>
        <button className="button-root category" onClick={handleConfidence}>Confidence</button>
        <button className="button-root category" onClick={handleAcceptance}>Acceptance</button>
        <button className="button-root category" onClick={handleGrowth}>Growth</button>
        </div>
        { 
          viewBeans 
          ? 
          <div>
            <button className="button-root hide-all" onClick={handleView}> 
              Hide All Beans
            </button>
            <BeansList beans={beans} />
          </div> 
          : 
          <button className="button-root view-all" onClick={handleView}> 
            View All Beans
          </button>
        }
      </Container>
    </div>
  );
}

export default App;
