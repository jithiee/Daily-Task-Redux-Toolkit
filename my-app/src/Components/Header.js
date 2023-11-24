import { useSelector } from 'react-redux/es/hooks/useSelector';
import React from 'react';

const Header = () => {
  const color = useSelector(state =>  state.color.value)
  const count = useSelector(state => state.count.value)

  return (
    <>
    <div style={{backgroundColor:'aliceblue',padding:'1%',color:color}}>
     <h1>REDUX LEARNING HUB</h1>
  <h3>counting = {count}</h3>
    </div>
    </>
  );
}

export default Header;
