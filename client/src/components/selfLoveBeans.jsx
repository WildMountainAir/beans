import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const SelfLoveBeans = ({selfLoveBeans}) => {
  
  return (
    <div>
      <table className="beans-table">
          <thead className="beans-table-data beans-title">Focus your intention on Self Love</thead>
        <tbody>
          {
            selfLoveBeans.map((bean) => {
            return (
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-bean"><img className="icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Icon.png" alt="logo icon"></img> {bean.bean}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

SelfLoveBeans.propTypes = {
  selfLoveBeans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
    map: PropTypes.func,
  }).isRequired
}

export default SelfLoveBeans;
