import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const BeansList = ({ beans}) => {

  return (
    <div>
      <table className="beans-table">
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            beans.map((bean) => {
            return (
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-category">{bean.category}</td>
                <td className="beans-table-data beans-bean"><img className="icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Icon.png" alt="logo icon"></img> {bean.bean}</td>
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
