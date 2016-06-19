import {grey50,indigo300, blueGrey700, grey300, deepOrange500} from 'material-ui/styles/colors';

const styles = {
  customWidth: {
    width: 200,
  },
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
  tabStyle: {
    padding: '0px 31px',
    height: 50,
    borderLeft: `1px solid ${grey300}`
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0'
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  },
  searchStyle: {
    width: '93%',
    marginLeft: 87
  },
  dropStyle: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 74,
    paddingTop: 0,
    paddingBottom: 0
  },
  tableStyle: {
    position: 'relative'
  },
  downloadStyle: {
    backgroundColor: 'rgb(52,178,130)',
    zoom: '.6',
    marginLeft: '10%'
  },
  verticalIconStyle: {
    fontWeight: 'bolder'
  }
};

export default styles;
