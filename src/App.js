import { BrowserRouter } from "react-router-dom";
import Root from "./router/Router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
