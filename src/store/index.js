import { configureStore } from '@reduxjs/toolkit';
import pianoReducer from '../reducers/pianoReducer';

const store = configureStore({
    reducer: pianoReducer,
});

export default store;