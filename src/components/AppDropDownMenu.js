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

  // Q: change one class's state will affect the whole state?
	constructor(props) {
		super(props);
		this.state = props;
		this.handleChange = (event, index, value) => {
			this.setState({value});
		}
	}

	render() {
    console.log(this.state);
		return (
		  <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange} className={"drop-menu"}>
		    {this.state.dropItems}
		  </DropDownMenu>
		);
	}
}

AppDropDownMenu.defaultProps = {
  value: "state",
  dropItems: items
}

export default AppDropDownMenu;
