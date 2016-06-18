import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {grey50,indigo300, blueGrey700,grey300,deepOrange500} from 'material-ui/styles/colors';

const style = {
	tabStyle: {
		padding: '0px 31px',
		height: 50,
		borderLeft: `1px solid ${grey300}`
	}
};

const AppMenuTabs = () => (
	<Tabs initialSelectedIndex = {1}
      inkBarStyle = {style}
	>
	    <Tab
	      label="Overall" style = {style.tabStyle}
	    >
	    </Tab>
	    <Tab
	      label="Specific" style = {style.tabStyle}
	    >
	    </Tab>
	</Tabs>
)

export default AppMenuTabs;