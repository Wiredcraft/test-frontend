import Home from '../Home'
import Profile from '../components/profile'
import NotFound from '../components/NotFound'

export default [
	{
		path: '/',
		exact: true,
		component: Home
	},
  {
		path: '/profile',
		component: Profile
	},
  {
		component: NotFound
	}
]