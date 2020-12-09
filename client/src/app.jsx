import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import listBeans from './lib/routes';
import getSelfLove from './lib/routes';

// import BeansCarousel from './components/beansCarousel.jsx';
// import Welcome from './components/welcome.jsx';
import BeansList from './components/beansList.jsx';
import SelfLoveBeans from './components/selfLoveBeans.jsx';
import ConfidenceBeans from './components/confidenceBeans.jsx';
import AcceptanceBeans from './components/acceptanceBeans.jsx';
import GrowthBeans from './components/growthBeans.jsx';
import RandomBean from './components/randomBean.jsx';

const App = () => {
  const [beans, setAllBeans] = useState([]);
  const [beansSelfLove, setSelfLoveBeans] = useState([]);
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
    setViewSelfLove(false);
    setViewConfidence(false);
    setViewAcceptance(false);
    setViewGrowth(false);
    setViewRandom(false);
  }

  const handleSelfLove = () => {
    setViewBeans(false);
    setViewConfidence(false);
    setViewAcceptance(false);
    setViewGrowth(false);
    setViewRandom(false);
    setViewSelfLove(!viewSelfLove);
  }

  const handleConfidence = () => {
    setViewBeans(false);
    setViewSelfLove(false);
    setViewAcceptance(false);
    setViewGrowth(false);
    setViewRandom(false);
    setViewConfidence(!viewConfidence);
  }

  const handleAcceptance = () => {
    setViewBeans(false);
    setViewSelfLove(false);
    setViewConfidence(false);
    setViewGrowth(false);
    setViewRandom(false);
    setViewAcceptance(!viewAcceptance);
  }

  const handleGrowth = () => {
    setViewBeans(false);
    setViewSelfLove(false);
    setViewConfidence(false);
    setViewAcceptance(false);
    setViewRandom(false);
    setViewGrowth(!viewGrowth);
  }
  const handleRandom = () => {
    setViewBeans(false);
    setViewSelfLove(false);
    setViewConfidence(false);
    setViewAcceptance(false);
    setViewGrowth(false);
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
          <Row >
            {
              viewSelfLove
              ?
              <button className="button-root category-hide" onClick={handleSelfLove}> Hide<br></br>Self Love<br></br>Beans</button>
              :
              <button className="button-root category" onClick={handleSelfLove}>View<br></br>Self Love<br></br>Beans</button>
            }
            {
              viewConfidence
              ?
              <button className="button-root category-hide m-l" onClick={handleConfidence}>Hide<br></br>Confidence<br></br>Beans</button>
              :
              <button className="button-root category m-l" onClick={handleConfidence}>View<br></br>Confidence<br></br>Beans</button>
            }
          </Row>
          <Row>
          {
            viewAcceptance
            ?
            <button className="button-root category-hide" onClick={handleAcceptance}>Hide<br></br>Acceptance<br></br>Beans</button>
            :
            <button className="button-root category" onClick={handleAcceptance}>View<br></br>Acceptance<br></br>Beans</button>
          }{
            viewGrowth
            ?
            <button className="button-root category-hide m-l" onClick={handleGrowth}>Hide<br></br>Growth<br></br>Beans</button>
            :
            <button className="button-root category m-l" onClick={handleGrowth}>View<br></br>Growth<br></br>Beans</button>
          }
          </Row>
          <Row>
          {
            viewRandom
            ?
            <button className="button-root category-hide" onClick={handleRandom}>Hide<br></br>Random<br></br>Bean</button>
            :
            <button className="button-root category" onClick={handleRandom}>View<br></br>Random<br></br>Bean</button>
          }
          { 
            viewBeans 
            ? 
            <button className="button-root category-hide m-l" onClick={handleView}>Hide<br></br>All<br></br>Beans</button>
            : 
            <button className="button-root category m-l" onClick={handleView}>View<br></br>All<br></br>Beans</button>
          }
          </Row>
          {
            viewSelfLove
            ?
            <div>
              <SelfLoveBeans beans={beans} beansSelfLove={beansSelfLove}/>
            </div>
            :
            ""
          }
          {
            viewConfidence
            ?
            <div>
              <ConfidenceBeans beans={beans}/>
            </div>
            :
            ""
          }
          {
            viewAcceptance
            ?
            <div>
              <AcceptanceBeans beans={beans}/>
            </div>
            :
            ""
          }
          {
            viewGrowth
            ?
            <div>
              <GrowthBeans beans={beans}/>
            </div>
            :
            ""
          }
        {
          viewRandom
          ?
          <div>
            <RandomBean beans={beans}/>
          </div>
          :
          ""
        }
        </div>
        { 
          viewBeans 
          ? 
          <div>
            <BeansList beans={beans} />
          </div> 
          : 
          ""
        }
      </Container>
    </div>
  );
}

export default App;
