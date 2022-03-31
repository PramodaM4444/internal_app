import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';


const rootReducer = combineReducers({
  cart: cartReducer
} as any )

export const store = configureStore({
  reducer: rootReducer
});
