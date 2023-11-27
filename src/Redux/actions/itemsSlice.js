import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // Importing the createSlice and createAsyncThunk functions from the Redux Toolkit
import axios from "axios"; // Importing the axios library

const initialState = { // Defining the initial state for the items slice of the Redux store
    itemsList: [], // An empty array to store the items
    totalPages: 0, // The total number of pages
    status: 'idle', // The status of the async fetch operation (idle, loading, succeeded, failed)
    error: null // The error message, if any
}

export const fetchItems = createAsyncThunk('items/fetchItems', async (action) => { // Creating an async thunk action creator to fetch items
    const currentPage= action.currentPage // Extracting the currentPage value from the action payload
    const category = action.category // Extracting the category value from the action payload
    try {
        const response = await axios.get(`http://localhost:8080/items?page=${currentPage}&category=${category}`); // Making a GET request to fetch items based on the current page and category
        return { itemsList: response.data.items, totalPages: response.data.totalPages } // Returning an object with the itemsList and totalPages values from the response data
    } catch (error) {
        console.error(error); // Logging the error to the console
        throw new Error('Failed to fetch items'); // Throwing an error to be caught by the fetchItems.rejected action handler
    }
});

const itemsSlice = createSlice({ // Creating a slice for the items state in the Redux store
    name: 'items', // The name of the slice
    initialState, // The initial state
    reducers: {}, // No additional reducers defined
    extraReducers(builder) { // Defining extra reducers for the fetchItems action
        builder
            .addCase(fetchItems.pending, (state, action) => { // The fetchItems.pending action handler
                state.status = 'loading' // Setting the status to 'loading'
            })
            .addCase(fetchItems.fulfilled, (state, action) => { // The fetchItems.fulfilled action handler
                state.status = 'succeeded' // Setting the status to 'succeeded'
                state.itemsList = action.payload.itemsList // Updating the itemsList
                state.totalPages = action.payload.totalPages// Updating the totalPage
            })
            .addCase(fetchItems.rejected, (state, action) => {// The fetchItems.rejected action handler
                state.status = 'failed' // Setting the status to 'failed'
                state.error = action.error.message //Updating the error message 
            })
    }
})
export default itemsSlice.reducer;