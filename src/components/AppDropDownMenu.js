import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  customWidth: {
    width: 200,
  },
};


const items = [];
const properties = ["state","district"];
for (let i = 0; i < properties.length; i++ ) {
	items.push(<MenuItem value={properties[i]} key={i} primaryText={`${properties[i]}`} />);
}

class AppDropDownMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: 1};
		this.handleChange = (event, index, value) => {
			this.setState({value});
		}
	}

	render() {
		return (
		  <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
		    {items}
		  </DropDownMenu>
		);
	}
}

export default AppDropDownMenu;