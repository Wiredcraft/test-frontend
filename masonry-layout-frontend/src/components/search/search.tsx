import React from 'react';
import './search.scss';

type MyProps = { placeholder: string, width?: string, onInput?: (arg: number) => void };
type MyState = { value: string };
export default class Search extends React.Component<MyProps, MyState> {
    static defaultProps = {
        width: '200px'
    }

    constructor(props) {
        super(props);
    }

    inputHandler(e) {
        this.props.onInput(e.target.value)
    }

    render() {
        return (
            <div className="search">
                <span className="iconfont icon-tubiaozhizuomoban-"></span>
                <input type="text" placeholder={this.props.placeholder} style={{ width: this.props.width }}
                    onInput={this.inputHandler.bind(this)} />
            </div>
        )
    }
}