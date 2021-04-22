import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import NotFound from 'container/NotFound'
import Home from 'container/Home'


const App = () => {
    return (
        <div>
            <Switch>
                <Redirect exact={true} from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route exact path="/404" component={NotFound} />
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </div>
    );
};

export default App