import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Container from './components/Container'

injectTapEventPlugin();
React.render(<Container />, document.querySelector('#app'));
