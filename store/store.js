import { configureStore } from '@reduxjs/toolkit';
// import userSlice from '../features/user/userSlice';
import categorySlice from '../features/category/categorySlice';
import homeSlice from '../features/homeData/homeSlice';
// import homeSlice from '../features/homedata/homeSlice';
const store = configureStore({
  reducer: {
    categorySlice: categorySlice,
    home: homeSlice,
    
  },
});

export default store;