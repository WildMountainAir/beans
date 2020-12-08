import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const SelfLoveBeans = ({beans}) => {
  const selfLoveArray = [];
  // eslint-disable-next-line react/prop-types
  for (var i = 0; i < beans.length; i ++) {
    if (beans[i].category === 'Self Love') {
      selfLoveArray.push(beans[i]);
    }
  }
  return (
    <div>
      <table className="beans-table">
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            selfLoveArray.map((bean) => {
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

SelfLoveBeans.propTypes = {
  beans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired
}

export default SelfLoveBeans;
