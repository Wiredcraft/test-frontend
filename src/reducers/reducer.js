import { searchItems } from '../actions/actions';

const tableData = [
  {
    region: 'John Smith',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    selected: true,
  },
  {
    region: 'Randal White',
    inpot: 'Unemployed',
    forms: 'Unemployed',
    voters: 'Unemployed',
    update: 'Unemployed',
  },
  {
    region: 'Stephanie Sanders',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Steve Brown',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Joyce Whitten',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Samuel Roberts',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Adam Moore',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
];

const initialState = {
	searchItems: '',
	items: tableData
}

export default function testApp(state = initialState, action) {
	switch(action.type) {
		case 'SEARCH_ITEMS':
			return {
				...state,
				items: state.items.filter(item => item.region.toLowerCase().indexOf(action.context.toLowerCase()) >= 0)
			}
	default:
		return state
	}
}
