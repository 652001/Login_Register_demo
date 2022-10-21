import axios from 'axios';
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } from './authSlice';
import { getUserFailed, getUserStart, getUserSuccess } from './userSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:8080/api/auth/signin', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('http://localhost:8080/api/auth/signup', user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const getAllUsers  = async (accesssToken, dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get('/v1/users', {
            headers: {token: `Bearer ${accesssToken}`}, // Chữ Bearer phụ thuộc vào từng cái token
        });
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailed());
    }
}
