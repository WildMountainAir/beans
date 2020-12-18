import React from 'react';
// import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const RandomBean = ({beans}) => {
  let randomNum = Math.floor(Math.random() * Math.floor(82));
  return (
    <div>
      <table className="beans-table">
      <thead className="beans-table-data beans-title">Focus your intention on {beans[randomNum].category !== undefined ? beans[randomNum].category : beans[5].category }</thead>
        <tbody>
              <tr key={uuidv4()}>
                <td className="beans-table-data beans-bean"><img className="icon" src="https://beans-affirmations.s3.us-east-2.amazonaws.com/Beans_Icon.png" alt="logo icon"></img> {beans[randomNum].bean}</td>
              </tr>
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
