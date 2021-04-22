import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import App from 'container/App'
import store from './store'

import 'antd/dist/antd.css';

const bootstrap = () => {
    return render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
        document.getElementById('app')
    )
}

bootstrap()