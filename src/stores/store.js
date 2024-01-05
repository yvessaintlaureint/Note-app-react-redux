import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../reducers/notesReducer';

const store = configureStore({
  reducer: notesReducer,
  // Other middleware and options can be added here
  // For example:
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yourCustomMiddleware),
  // devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development only
});

export default store;
