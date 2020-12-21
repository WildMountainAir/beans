import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AcceptanceBeans = ({acceptanceBeans, beans}) => {
  console.log('acceptance beans in component', acceptanceBeans)
  const acceptanceArray = [];
  // eslint-disable-next-line react/prop-types
  for (var i = 0; i < beans.length; i ++) {
    if (beans[i].category === 'Acceptance') {
      acceptanceArray.push(beans[i]);
    }
  }
  return (
    <div>
      <table className="beans-table">
      <thead className="beans-table-data beans-title">Focus your intention on Acceptance</thead>
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            acceptanceArray.map((bean) => {
            return (
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-bean"><img className="icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Icon.png" alt="logo icon"></img> {bean.bean}</td>
              </tr>
            )
            })
          }
          <p>ACCEPTANCE BEANS</p>
          {
            // eslint-disable-next-line react/prop-types
            acceptanceBeans.map((bean) => {
              return (
                <tr key={uuidv4()}>
                  <td className="beans-table-data beans-bean"><img className="icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Icon.png" alt="logo icon"></img> {bean.bean}</td>
                </tr>
              )
              })
          }
        </tbody>
      </table>
    </div>
  );
}

AcceptanceBeans.propTypes = {
  beans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired,
  acceptanceBeans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired
}

export default AcceptanceBeans;