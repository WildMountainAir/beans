import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const BeansList = ({ beans}) => {

  return (
    <div>
      <table className="beans-table">
        <thead>
          <tr>
            <th className="beans-table-header">Category</th>
            <th className="beans-table-header">Bean Affirmations</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            beans.map((bean) => {
            return (
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-category">{bean.category}</td>
                <td className="beans-table-data beans-bean">{bean.bean}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

BeansList.propTypes = {
  beans: PropTypes.shape({
    category: PropTypes.string,
    bean: PropTypes.string,
  }).isRequired
}

export default BeansList;
