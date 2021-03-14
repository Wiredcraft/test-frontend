import React, { Component } from "react";
import { connect } from "react-redux";

import { waitForImages } from "../utils/responsiveMasonry";

class Gallery extends Component {
    componentDidMount() {
        waitForImages();
    }
    componentDidUpdate() {
        waitForImages();
    }
    render() {
        const { imgList } = this.props;
        return (
            <div className="grid-container">
                {imgList.map((item, index) => {
                    if (item) {
                        return (
                            <div className="grid-item" key={item._id}>
                                <img
                                    className="grid-content"
                                    src={item.src}
                                    alt={item.src}
                                ></img>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    imgList: state.gallery.filteredImgList
});

export default connect(mapStateToProps)(Gallery);
