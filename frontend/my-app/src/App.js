import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './app/loginSlice'
import Product from './app/Product';
import Login from './app/Login';



function App() {
  const userName = useSelector(selectUserName);
  return (
    <div>
      {userName && <div>Hello {userName}</div>}
      <Login></Login>
      <Product></Product>


    </div>
    
    
  );
}

export default App;
