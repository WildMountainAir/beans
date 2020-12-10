import React from 'react';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <div>
      <p className="contact">Beans was created and developed by Alison Sipos. Connect with her by clicking on the icons below.</p>
      <Row>
        <a href="https://github.com/WildMountainAir" target="_blank" rel="noreferrer"><img className="contact-icon m-l-icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/github+(1).png" alt="link to github"></img></a>
        <a href="https://www.linkedin.com/in/siposalison/" target="_blank" rel="noreferrer"><img className="contact-icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/linkedin+(1).png" alt="link to linkedin"></img></a>
        <a href="mailto: alison.sipos@icloud.com" target="_blank" rel="noreferrer"><img className="contact-icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/mail+(1).png" alt="link to email"></img></a>
        <a href="https://beans-affirmations.s3.us-east-2.amazonaws.com/Resume_AlisonSipos_v2.pdf" target="_blank" rel="noreferrer"><img className="contact-icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/resume+(1).png" alt="link to resume"></img></a>
      </Row>
    </div>
  );
}



export default Contact;
