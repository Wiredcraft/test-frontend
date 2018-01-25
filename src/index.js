import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "./index.css"
import App from "./components/App"
import initialList from "./store/testData"
import configureStore from "./store/configureStore"
import registerServiceWorker from "./registerServiceWorker"

const store = configureStore({ list: initialList })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

registerServiceWorker()
