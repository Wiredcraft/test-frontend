import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Root = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
    </Routes>
);

export default Root;
