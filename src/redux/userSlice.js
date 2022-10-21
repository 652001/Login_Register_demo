import { createSlice } from '@reduxjs/toolkit';

const useSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            allUsers: null,
            isFeching: false,
            error: false,
        },
    },
    reducers: {
        getUserStart: (state) => {
            state.user.isFeching = true;
        },
        getUserSuccess: (state, action) => {
            state.user.isFeching = false;
            state.user.allUsers = action.payload;
        },
        getUserFailed: (state) => {
            state.user.isFeching = false;
            state.user.error = true;
        },
    }
});

export const {
    getUserStart,
    getUserSuccess,
    getUserFailed,
} = useSlice.actions;

export default useSlice.reducer;