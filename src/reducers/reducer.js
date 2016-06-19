import { searchItems } from '../actions/actions';

// todo: load initialize data via ajax
const tableData = [
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    selected: true,
    id: "1001"
  },
  {
    region: 'State',
    inpot: 'Unemployed',
    forms: 'Unemployed',
    voters: 'Unemployed',
    update: 'Unemployed',
    id: "1002",
    district: {
      region: 'District',
      inpot: 'Unemployed',
      forms: 'Unemployed',
      voters: 'Unemployed',
      update: 'Unemployed',
      id: "1003",
      township: {
        region: 'township',
        inpot: 'Unemployed',
        forms: 'Unemployed',
        voters: 'Unemployed',
        update: 'Unemployed',
        id: "1004",
      }
    },
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: "1005"
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: "1006"
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: "1007"
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    id: "1008"
  },
  {
    region: 'State',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
];

const initialState = {
	searchItems: '',
	items: tableData,
	inputValue: 'filter'
}

export default function testApp(state = initialState, action) {
  console.log(action.type);
	switch(action.type) {
		case 'SEARCH_ITEMS':
			return {
				...state,
				items: tableData.filter(item => item.region.toLowerCase().indexOf(action.context.toLowerCase()) >= 0)
			}
    case 'SHOW_DISTRICT':
      console.log(action.id);
      return {
       ...state,
       visibility: true
      }
	default:
		return state
	}
}
