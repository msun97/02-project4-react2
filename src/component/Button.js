import React from 'react';
import "@/styles/componnent.scss";

const Button = ({ children, Bg, onClick }) => {
  return (
    <div className={`btn-component ${Bg}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;