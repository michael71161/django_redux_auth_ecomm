import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from './loginSlice'
import productReducer from './productSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer,
    product:productReducer
    
  },
});
