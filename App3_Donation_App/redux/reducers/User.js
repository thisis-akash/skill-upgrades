import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: 'John',
    lastName: 'Jacobs',
    userId: 1
};

export const User = createSlice({
    name: 'User',
    initialState: initialState,

    reducers: {
        updateFirstName: (state = initialState, action) => {
            state.firstName = action.payload.firstName;
        }
    }
});

export const { updateFirstName } = User.actions;

export default User.reducer;