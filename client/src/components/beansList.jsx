import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const BeansList = ({ beans }) => {

  return (
    <div>
      {beans.map((bean) => {
        return (
          <div key={uuidv4()}>
            {bean.category}
            {bean.bean}
          </div>
        )
      })}
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
