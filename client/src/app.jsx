import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import listBeans from './lib/routes.js';
import listAcceptanceBeans from './lib/routes.js';
import listGrowthBeans from './lib/routes.js';
import listSelfLoveBeans from './lib/routes.js';
import listConfidenceBeans from './lib/routes.js';

// import Welcome from './components/welcome.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import BeansList from './components/beansList.jsx';
import SelfLoveBeans from './components/selfLoveBeans.jsx';
import ConfidenceBeans from './components/confidenceBeans.jsx';
import AcceptanceBeans from './components/acceptanceBeans.jsx';
import GrowthBeans from './components/growthBeans.jsx';
import RandomBean from './components/randomBean.jsx';

const App = () => {
  const [beans, setAllBeans] = useState([]);
  const [acceptanceBeans, setAcceptanceBeans] = useState([]);
  const [growthBeans, setGrowthBeans] = useState([]);
  const [selfLoveBeans, setSelfLoveBeans] = useState([]);
  const [confidenceBeans, setConfidenceBeans] = useState([]);
  const [viewBeans, setViewBeans] = useState(false);
  const [viewSelfLove, setViewSelfLove] = useState(false);
  const [viewConfidence, setViewConfidence] = useState(false);
  const [viewAcceptance, setViewAcceptance] = useState(false);
  const [viewGrowth, setViewGrowth] = useState(false);
  const [viewRandom, setViewRandom] = useState(false);
  const [viewAbout, setViewAbout] = useState(false);
  const [viewContact, setViewContact] = useState(false);

  useEffect(() => {
    listBeans((error, response) => {
      error ? 'could not get beans' : setAllBeans(response);
    })
    listAcceptanceBeans((error, response) => {
      console.log('acceptance beans in app', response);
      error ? 'could not get acceptance beans' : setAcceptanceBeans(response);
    })
    listGrowthBeans((error, response) => {
      console.log('growth beans in app', response);
      error ? 'could not get acceptance beans' : setGrowthBeans(response);
    })
    listConfidenceBeans((error, response) => {
      console.log('confidence beans in app', response);
      error ? 'could not get acceptance beans' : setConfidenceBeans(response);
    })
    listSelfLoveBeans((error, response) => {
      console.log('self love beans in app', response);
      error ? 'could not get acceptance beans' : setSelfLoveBeans(response);
    })
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
  const handleAbout = () => {
    setViewContact(false);
    setViewBeans(false);
    setViewSelfLove(false);
    setViewConfidence(false);
    setViewAcceptance(false);
    setViewGrowth(false);
    setViewRandom(false);
    setViewAbout(!viewAbout);
  }
  const handleContact = () => {
    setViewAbout(false);
    setViewBeans(false);
    setViewSelfLove(false);
    setViewConfidence(false);
    setViewAcceptance(false);
    setViewGrowth(false);
    setViewRandom(false);
    setViewContact(!viewContact);
  }

  return (
    <div>
      <Container>
        <Jumbotron fluid className="jumbo-style">
          <Container>
            <img src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Long.png" alt="beans logo" className="header-logo"/>
          </Container>
        </Jumbotron>
            <table>
              {
                viewAbout
                ?
                <tbody>
                  <Row>
                    <td><a onClick={handleAbout} className="links">About <button className="arrow-btn"><img className="arrow" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/arrow.png"></img></button></a></td>
                  </Row>
                  <Row>
                    <td><About /></td>
                  </Row>
                </tbody>
                :
                <tbody>
                  <Row>
                    <td><a onClick={handleAbout} className="links">About <button className="arrow-btn"><img className="arrow" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/arrow+(1).png"></img></button></a></td>
                  </Row>
                </tbody>
              }
              {
                viewContact
                ?
                <tbody>
                  <Row>
                    <td><a onClick={handleContact} className="links">Contact <button className="arrow-btn"><img className="arrow" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/arrow.png"></img></button></a></td>
                  </Row>
                  <Row>
                    <td><Contact /></td>
                  </Row>
                </tbody>
                :
                <tbody>
                  <Row>
                    <td><a onClick={handleContact} className="links">Contact <button className="arrow-btn"><img className="arrow" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/arrow+(1).png"></img></button></a></td>
                  </Row>
                </tbody>
              }
            </table>
        <div className="category-box">
          <Row >
            {
              viewRandom
              ?
              <button className="button-root category-hide" onClick={handleRandom}>Hide<br></br>Bean</button>
              :
              <button className="button-root category" onClick={handleRandom}>Random<br></br>Bean</button>
            }
            {
              viewSelfLove
              ?
              <button className="button-root category-hide m-l" onClick={handleSelfLove}> Hide<br></br>Beans</button>
              :
              <button className="button-root category m-l" onClick={handleSelfLove}>Self Love<br></br>Beans</button>
            }
            {
              viewConfidence
              ?
              <button className="button-root category-hide m-l" onClick={handleConfidence}>Hide<br></br>Beans</button>
              :
              <button className="button-root category m-l" onClick={handleConfidence}>Confidence<br></br>Beans</button>
            }
          </Row>
          <Row>
          {
            viewGrowth
            ?
            <button className="button-root category-hide" onClick={handleGrowth}>Hide<br></br>Beans</button>
            :
            <button className="button-root category" onClick={handleGrowth}>Growth<br></br>Beans</button>
          }
          {
              viewAcceptance
              ?
              <button className="button-root category-hide m-l" onClick={handleAcceptance}>Hide<br></br>Beans</button>
              :
              <button className="button-root category m-l" onClick={handleAcceptance}>Acceptance<br></br>Beans</button>
          }
          { 
            viewBeans 
            ? 
            <button className="button-root category-hide m-l" onClick={handleView}>Hide<br></br>All Beans</button>
            : 
            <button className="button-root category m-l" onClick={handleView}>All<br></br>Beans</button>
          }
          </Row>
          {
          viewBeans === false 
          && viewSelfLove === false 
          && viewAcceptance === false 
          && viewConfidence === false 
          && viewGrowth === false 
          && viewRandom === false ?
          <p className="beans-placeholder">Choose a Category</p>
          :
          ""
        }
          {
            viewSelfLove
            ?
            <div>
              <SelfLoveBeans beans={beans} selfLoveBeans={selfLoveBeans}/>
            </div>
            :
            ""
          }
          {
            viewConfidence
            ?
            <div>
              <ConfidenceBeans beans={beans} confidenceBeans={confidenceBeans}/>
            </div>
            :
            ""
          }
          {
            viewAcceptance
            ?
            <div>
              <AcceptanceBeans beans={beans} acceptanceBeans={acceptanceBeans}/>
            </div>
            :
            ""
          }
          {
            viewGrowth
            ?
            <div>
              <GrowthBeans beans={beans} growthBeans={growthBeans}/>
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
      <footer className="beans-footer">
      <img className="footer-icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Icon.png" alt="logo icon"></img>  Created by <a href="https://www.linkedin.com/in/siposalison/" target="_blank" rel="noreferrer" className="footer-link">Alison Sipos</a>
      </footer>
    </div>
  );
}

export default App;
