import React, {Component} from 'react'
import _header from './header'
import _content from './content'

export default class AppComponent extends Component {
    render() {
        return (
            <div>
                <_header></_header>
                <_content></_content>
            </div>
        );
    }
}
