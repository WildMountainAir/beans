import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const GrowthBeans = ({growthBeans}) => {

  return (
    <div>
      <table className="beans-table">
      <thead className="beans-table-data beans-title">Focus your intention on Growth</thead>
        <tbody>
          {
            growthBeans.map((bean) => {
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

GrowthBeans.propTypes = {
  growthBeans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
    map: PropTypes.func,
  }).isRequired
}

export default GrowthBeans;