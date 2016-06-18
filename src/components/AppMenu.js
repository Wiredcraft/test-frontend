import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import AppMenuTabs from './AppMenuTab';
import Avatar from 'material-ui/Avatar';
import {grey50,indigo300, blueGrey700, deepOrange500} from 'material-ui/styles/colors';

const style = {
	iconStyle: {
		borderRight: '1px solid #ddd',
		height: 50,
		padding: 0,
		position: 'relative',
		width: 50,
	},
	titleStyle: {
		fontSize: 21,
		fontWeight: 'bolder',
	},
}

const AppMenu = () => (
  <AppBar
    title="Reports"
    titleStyle = {style.titleStyle}
    iconElementLeft = {
    	<IconButton style = {style.iconStyle}>
		    <Avatar
		          src="assets/sina.png"
		          size = {38}
		          style = {style.avatarStyle}
		  	/>
		</IconButton>
    }
    iconElementRight={
    	<AppMenuTabs />
    }
  />
);

export default AppMenu;