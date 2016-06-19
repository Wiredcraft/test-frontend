import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {grey50,indigo300, blueGrey700,grey300,deepOrange500} from 'material-ui/styles/colors';
import styles from '../config/styles';

const AppMenuTabs = () => (
	<Tabs initialSelectedIndex = {1}
      inkBarStyle = {styles}
	>
	    <Tab
	      label="Overall" style = {styles.tabStyle}
	    >
	    </Tab>
	    <Tab
	      label="Specific" style = {styles.tabStyle}
	    >
	    </Tab>
	</Tabs>
);

export default AppMenuTabs;
