import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions'
import TableFilter from '../components/TableFilter'



const mapStateToProps = (state) => ({
    filterType : state.tableFilter.filterType,
    filterName : state.tableFilter.filterName,
    filterVisible : state.tableFilter.filterVisible
});


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};


export default connect (mapStateToProps , mapDispatchToProps) (TableFilter)