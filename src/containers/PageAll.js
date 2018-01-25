import { connect } from "react-redux"
import PageAll from "../components/PageAll"

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(PageAll)
