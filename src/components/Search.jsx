import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * Search component
 */
class Search extends React.Component {
    static defaultProps = {
        activeTerm: ''
    };

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        activeTerm: PropTypes.string
    };

    state = {
        term: this.props.activeTerm,
        timeout: 0
    };

    _timeout = 0;

    onChange = ({ target: { value } }) => {
        if (this._timeout) clearTimeout(this._timeout);
        this._timeout = setTimeout(() => this.props.onChange(this.state.term), 300);
        this.setState({
            term: value
        });
    }

    render() {
        const { onChange } = this;
        const { term } = this.state;
        return (
            <div className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search"
                    onChange={onChange}
                    value={term}/>
                <Icon type="search" className="search__icon" />
            </div>
        );
    }
}

export default Search;
