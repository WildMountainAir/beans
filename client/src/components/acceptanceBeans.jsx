import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AcceptanceBeans = ({beans}) => {
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
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            acceptanceArray.map((bean) => {
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

AcceptanceBeans.propTypes = {
  beans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired
}

export default AcceptanceBeans;