import React from 'react'

import {selectProducts} from './productSlice'
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './loginSlice';


const Testview = () => {
    const userName = useSelector(selectUserName);
  return (
    <div>
        <h1>
            Logged user : {userName}
        </h1>
    </div>
  )
}

export default Testview