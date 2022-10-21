import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import * as routes from '~/routes'
import NavBar from '~/pages/NavBar/NavBar';

function App() {
    const user = useSelector((state) => state.auth.login.currentUser); // Trỏ vào auth và sau đó tới tục tới file authSlide để kiểm tra tài khoản

    return (
            <div className="App">
                <NavBar/>
                <Routes>
                    { routes.privateRoute.map((route, index) => {
                        const PageLogin = user ? (route.element) : (Login);
                        const Register = route.element
                        return (
                            <Route 
                            path={route.path}
                            key={index}
                            element={ route.path==='/register' ? (<Register/>) : (<PageLogin/>)}
                            />
                        )
                    })}
                </Routes>
            </div>
    );
}

export default App;
