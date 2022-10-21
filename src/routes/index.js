import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Register from "~/pages/Register";


const privateRoute = [
    { path: '/', element: Home},
    { path: '/login', element: Login},
    { path: '/register', element: Register}
];

const publicRoute = [];

export { publicRoute, privateRoute };