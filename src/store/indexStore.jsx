import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/indexReducer';

const store = configureStore({
    reducer: rootReducer,
});

export default store;