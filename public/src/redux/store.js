import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './ContactsSlice.js';
import filtersReducer from './FiltersSlice.js';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    
})