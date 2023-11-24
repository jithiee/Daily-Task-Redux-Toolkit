import { useSelector } from 'react-redux';
import React from 'react';

const Footer = () => {
  const color  = useSelector(state => state.color.value)
  const count = useSelector(state => state.count.value)
  return (
    <>
    <h2 style={{marginTop:'7%',backgroundColor:'yellowgreen',padding:'30px',color:color}}>
    FOOTER
    <h3>counting = {count} </h3>
    </h2>

    </>
  );
}

export default Footer;
