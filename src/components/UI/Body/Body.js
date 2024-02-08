import React from 'react';

const Body = (props) => {
  return (
    <div className='container-wrapper'

    >
      {props.children}
    </div>
  );
};

export default Body;
