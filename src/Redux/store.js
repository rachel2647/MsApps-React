import { configureStore } from '@reduxjs/toolkit'; // Importing the configureStore function from the Redux Toolkit
import itemsReducer from './actions/itemsSlice'; // Importing the itemsReducer from the itemsSlice file

const store = configureStore({ // Configuring the Redux store
    reducer: {
        items: itemsReducer // Setting the itemsReducer as the reducer for the 'items' slice of the store
    }
})

export default store; // Exporting the configured store for use in the application
