import axios from "axios";
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataError
} from "../actions/index";

export function fetchGallery() {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios
            .get("./data.json")
            .then((response) => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchDataError(error));
            });
    };
}
