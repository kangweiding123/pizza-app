import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../components/Admin'
import Menu from '../components/Menu'

const routerConfig = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/admin', component: Admin },
    { path: '/menu', component: Menu }
]
export default routerConfig;