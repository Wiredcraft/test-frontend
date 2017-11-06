import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from '../images/logo.png';

/* Import Containers */
import ReportsContainer from './ReportsContainer';

/* Import Components */
import Header from '../components/Header';
import Title from '../components/Title';
import Navigation from '../components/Navigation';

/**
* Root Container
* @class
*/
class RootContainer extends React.Component {
    state = {
        title: 'Reports'
    };

    /**
    * render
    */
    render() {
        return (
            <main>
                <Header logo={logo}>
                    <Title text={this.state.title} />
                    <Navigation links={['Overall', 'Specific']} />
                </Header>
                <section className="view" data-view>
                    <Switch>
                        <Route exact path="/" component={ReportsContainer} />
                    </Switch>
                </section>
            </main>
        );
    }
}

export default RootContainer;
