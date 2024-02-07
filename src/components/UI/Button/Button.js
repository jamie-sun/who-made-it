import React from 'react';
import MuiButton from '@mui/material/Button'

const Button = (props) => {
  
  const buttonClickHandler = () => {
    props.onClick();
  }

  return (
    <MuiButton
      variant="outlined"
      onClick={buttonClickHandler}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
