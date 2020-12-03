import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import listBeans from './lib/routes';
import getSelfLove from './lib/routes';

// import BeansCarousel from './components/beansCarousel.jsx';
import BeansList from './components/beansList.jsx';
import SelfLoveBeans from './components/selfLoveBeans.jsx';
import ConfidenceBeans from './components/confidenceBeans.jsx';
import AcceptanceBeans from './components/acceptanceBeans.jsx';
import GrowthBeans from './components/growthBeans.jsx';
import RandomBean from './components/randomBean.jsx'

const App = () => {
  const [beans, setAllBeans] = useState([]);
  // const [beansSelfLove, setSelfLoveBeans] = useState([]);
  const [viewBeans, setViewBeans] = useState(false);
  const [viewSelfLove, setViewSelfLove] = useState(false);
  const [viewConfidence, setViewConfidence] = useState(false);
  const [viewAcceptance, setViewAcceptance] = useState(false);
  const [viewGrowth, setViewGrowth] = useState(false);
  const [viewRandom, setViewRandom] = useState(false);

  useEffect(() => {
    listBeans((error, response) => {
      error ? 'could not get beans' : setAllBeans(response);
    })
    // getSelfLove((error, response) => {
    //   console.log('beans', beansSelfLove);
    //   error ? 'could not get self-love beans' : setSelfLoveBeans(response);
    // })
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
  const handleRandom = () => {
    setViewRandom(!viewRandom);
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
        {
          viewRandom
          ?
          <div>
            <button className="button-root category" onClick={handleRandom}>Hide Random Bean</button>
            <RandomBean beans={beans}/>
          </div>
          :
          <button className="button-root category" onClick={handleRandom}>Random Bean</button>
        }
        {
          viewSelfLove
          ?
          <div>
            <button className="button-root category" onClick={handleSelfLove}>Hide Self Love Beans</button>
            <SelfLoveBeans beans={beans} beansSelfLove={beansSelfLove}/>
          </div>
          :
          <button className="button-root category" onClick={handleSelfLove}>View Self Love Beans</button>
        }
        {
          viewSelfLove
          ?
          <div>
            <button className="button-root category" onClick={handleSelfLove}>Hide Self Love Beans</button>
            <SelfLoveBeans beans={beans} beansSelfLove={beansSelfLove}/>
          </div>
          :
          <button className="button-root category" onClick={handleSelfLove}>View Self Love Beans</button>
        }
        {
          viewConfidence
          ?
          <div>
            <button className="button-root category" onClick={handleConfidence}>Hide Confidence Beans</button>
            <ConfidenceBeans beans={beans}/>
          </div>
          :
          <button className="button-root category" onClick={handleConfidence}>View Confidence Beans</button>
        }
        {
          viewAcceptance
          ?
          <div>
            <button className="button-root category" onClick={handleAcceptance}>Hide Acceptance Beans</button>
            <AcceptanceBeans beans={beans}/>
          </div>
          :
          <button className="button-root category" onClick={handleAcceptance}>View Acceptance Beans</button>
        }
        {
          viewGrowth
          ?
          <div>
            <button className="button-root category" onClick={handleGrowth}>Hide Growth Beans</button>
            <GrowthBeans beans={beans}/>
          </div>
          :
          <button className="button-root category" onClick={handleGrowth}>View Growth Beans</button>
        }
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
