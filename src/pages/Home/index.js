import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { getAllUsers } from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cln = classNames.bind(styles);

function Home() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userList = useSelector((state) => state.users.users?.allUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
        if (user?.accesssToken) {
            getAllUsers(user.accesssToken, dispatch);
        }
    }, []);

    const usersDemo = [
        { id: '1', username: 'taoem1', password: '123' },
        { id: '2', username: 'nhulao2', password: '123' },
        { id: '3', username: 'chosanh3', password: '123' },
        { id: '3', username: 'chosanh3', password: '123' },
        { id: '4', username: 'maimailabaolau5', password: '123' },
        { id: '4', username: 'latcaiban6', password: '123' },
    ];

    const handleDeleteUser = (e) => {
        e.preventDefault();
    };

    return (
        <section id={cln('container')}>
            <h2>Danh sách tài khoản</h2>
            {userList?.map((user) => {
                return (
                    <div className={cln('content')}>
                        <div className={cln('user')}>{user.username}</div>
                        <button className={cln('delete')} onClick={() => handleDeleteUser(user._id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </section>
    );
}

export default Home;
