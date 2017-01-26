import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import AppMenuTabs from './AppMenuTab';
import Avatar from 'material-ui/Avatar';
import {grey50,indigo300, blueGrey700, deepOrange500} from 'material-ui/styles/colors';
import styles from '../config/styles';
const AppMenu = () => (
  <AppBar
    title="Reports"
    titleStyle = {styles.titleStyle}
    iconElementLeft = {
    	<IconButton style = {styles.iconStyle}>
		    <Avatar
		          src="assets/sina.png"
		          size = {38}
		          style = {styles.avatarStyle}
		  	/>
		</IconButton>
    }
    iconElementRight={
    	<AppMenuTabs />
    }
  />
);

export default AppMenu;
