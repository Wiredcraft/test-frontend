import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Button from './Button';

const Filter = ({ options, isOpen, onToggle, onFilter }) => (
    <div className="filter">
        <Button onClick={onToggle} type="filter">Filter</Button>
        <CSSTransitionGroup
            transitionName="appearFromTop"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            { isOpen && (
                <ul className="filter__list">
                    {options.map(option => <li className="filter__item" onClick={() => onFilter(option)} key={option}>{option}</li>)}
                </ul>
            )}
        </CSSTransitionGroup>
    </div>
);

Filter.defaultProps = {
    isOpen: false
};

Filter.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired
};

export default Filter;
