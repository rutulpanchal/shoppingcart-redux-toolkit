import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/shop/productSlice'
export default configureStore({
  reducer: {
   
    product: productReducer
  },
});
