import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByName } from "../actions/index";

class SearchBar extends Component {
    filterByInput(filter) {
        this.props.dispatch(filterByName({ value: filter }));
    }
    render() {
        return (
            <input
                type="text"
                className="filter-input"
                onChange={(e) => this.filterByInput(e.target.value)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    imgList: state.gallery.filteredImgList
});

export default connect(mapStateToProps)(SearchBar);
