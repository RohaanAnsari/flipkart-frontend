import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import authReducer from './action.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

const rootreducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer
})

export default rootreducer;