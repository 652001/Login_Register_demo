import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { registerUser } from '~/redux/apiRequest';

const cln = classNames.bind(styles);

const courses = [
    {
      id: 1,
      name: "ADMIN",
    },
    {
      id: 2,
      name: "USER",
    },
    {
      id: 3,
      name: "PM",
    },
  ];
  

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [checked, setChecked] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            username: username,
            password: password,
            email: email,
            checked: checked,
        };
        registerUser(newUser, dispatch, navigate);
    };

    return (
        <>
            <div id={cln('container')}>
                <h2 className={cln('header-title')}>Đăng ký</h2>
                <form action="" onSubmit={handleRegister} method="post">
                    <div className={cln('row')}>
                        <label htmlFor="name">Tên</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập tên..."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={cln('row')}>
                        <label htmlFor="email">Tài khoản</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Nhập tài khoản hay email..."
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={cln('row')}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu..."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cln('row')}>
                        <label htmlFor="email">Nhập email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Nhập mật khẩu..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cln('row')}>
                        {courses.map((course) => (
                            <div
                                className="input"
                                key={course.id} // Luôn đặt key khi dùng map nằm ở phía ngoài cùng
                            >
                                <input
                                    type="radio"
                                    checked={checked === course.id} // Kiểm tra để có cùng với id hiện thời rồi để thể hiện ra input
                                    onChange={() => setChecked(course.id)} //Khi onChange trên các input thì cũng xét đồng thời
                                />
                                {course.name}
                            </div>
                        ))}
                    </div>
                    <div id={cln('btn-form')} className={cln('row')}>
                        <button type="submit">Đăng ký</button>
                    </div>
                </form>
                <div className={cln('login')}>
                    <span>Nếu đã có tài khoản thì </span>
                    <Link className={cln('login-link')} to="/login">
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Register;
