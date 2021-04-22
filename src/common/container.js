import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'common/util'
import { Form } from 'antd'

export default (formOpt, ...connectOpts) => {
    const chain = [withRouter]

    if (connectOpts.length === 2 || formOpt === true) {
        chain.push(Form.create(typeof formOpt === 'object' ? formOpt : {}))
    } else {
        connectOpts = [formOpt, ...connectOpts]
    }

    let mapState = state => ({ $app: state.app })

    const [mapStateToProps, mapDispatchToProps] = connectOpts

    if (typeof mapStateToProps === 'function') {
        mapState = state => ({
            $app: state.app,
            ...mapStateToProps(state)
        })
    }

    chain.push(connect(mapState, mapDispatchToProps))

    return compose(...chain)
}