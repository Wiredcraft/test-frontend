import { memo } from "react";
import Search from '../Search/index';
import Home from '../Icons/home';
import Notification from '../Icons/notification';
import User from '../Icons/user';

const Nav = () => {

    return (
        <div className="actions-center">
            <Search />
            <Home />
            <Notification />
            <User />
        </div>
    );
}

export default memo(Nav)