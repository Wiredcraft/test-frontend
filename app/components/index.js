import React, {Component} from 'react'
import _header from './header/index.js'
import _content from './content/index.js'

export default class AppComponent extends Component {
    render() {
        return (
            <div>
                index
                <_header></_header>
                <_content></_content>
            </div>
        );
    }
}
