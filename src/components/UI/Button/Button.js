import React from 'react';
import MuiButton from '@mui/material/Button'
import './Button.css'

const Button = (props) => {
  
  const buttonClickHandler = () => {
    props.onClick();
  }

  return (
    <div className="mui-button">
    <MuiButton
      variant="outlined"
      onClick={buttonClickHandler}
    >
      {props.children}
    </MuiButton>
    </div>
  );
};

export default Button;
