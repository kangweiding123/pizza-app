import Home from '../components/Home'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../components/Admin'
import Menu from '../components/Menu'
// 二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuid from '../components/about/OrderingGuid'
const routerConfig = [
    {path: '/', component: Home, name: 'homeLink'},
    {path: '/about', component: About, name: 'aboutLink',children:[
            {path:'/about/contact',component:Contact,name:'contactLink'},
            {path:'/about/delivery',component:Delivery,name:'deliveryLink'},
            {path:'/about/history',component:History,name:'historyLink'},
            {path:'/about/orderingGuid',component:OrderingGuid,name:'orderingGuidLink'}
        ]
    },
    {path: '/login', component: Login, name: 'loginLink'},
    {path: '/register', component: Register, name: 'registerLink'},
    {path: '/admin', component: Admin, name: 'adminLink' },
    {path: '/menu', component: Menu, name: 'menuLink' },
    {path: '*', redirect: '/'}
]
export default routerConfig;