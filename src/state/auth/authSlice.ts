import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@state/store';

export interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: '',
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state) => {
            state.token = '1';
        },
        logout: (state) => {
            state.token = '';
        },
    },
})

export const AuthSelectors = {
    isAuthorized: (state: RootState) => state.auth.token !== '',
};

export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer