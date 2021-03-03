import Home from '../Home';
import Profile from '../components/profile';
import Likes from '../components/Likes'
import NotFound from '../components/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/likes',
    component: Likes,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    component: NotFound,
  },
];
