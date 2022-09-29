//!Importiamo VueRouter anche qui, basta solo questo per farlo funzionare
import VueRouter from 'vue-router';

//!Importiamo le pagine singole
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';

//!Istanza di VueRouter
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
    ],
});

export default router
