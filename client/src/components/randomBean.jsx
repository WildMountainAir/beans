import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const RandomBean = ({ beans}) => {

  const random = beans[Math.random(1, 67)];
  return (
    <div>
      <table className="beans-table">
        <tbody>
            return (
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-category">Focus your intention on {random.category}</td>
                <td className="beans-table-data beans-bean">{random.bean}</td>
              </tr>
            )
        </tbody>
      </table>
    </div>
  );
}

RandomBean.propTypes = {
  beans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired
}

export default RandomBean;
