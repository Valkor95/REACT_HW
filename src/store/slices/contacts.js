import {createSlice} from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [{
            id: 1, name: 'John Doe', email: 'john@example.com'
        }]
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        updateContact: (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index !== -1){
                state.contacts[index] = action.payload;
            }
        }
    }
});

export const {
    addContact,
    deleteContact,
    updateContact
} = contactsSlice.actions

export default contactsSlice.reducer