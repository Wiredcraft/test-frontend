import React from 'react';
import ReactDom from 'react-dom';
import Main from './containers/main';

require ('./styles/Main.scss')

ReactDom.render(
	<Main />,
	document.getElementById('root')
);