import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ConfidenceBeans = ({beans}) => {
  const confidenceArray = [];
  // eslint-disable-next-line react/prop-types
  for (var i = 0; i < beans.length; i ++) {
    if (beans[i].category === 'Confidence') {
      confidenceArray.push(beans[i]);
    }
  }
  return (
    <div>
      <table className="beans-table">
      <thead className="beans-table-data beans-title">Focus your intention on Confidence</thead>
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            confidenceArray.map((bean) => {
            return (
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-bean">{bean.bean}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

ConfidenceBeans.propTypes = {
  beans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired
}

export default ConfidenceBeans;