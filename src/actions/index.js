export function fetchDataRequest() {
    return {
        type: "FETCH_DATA_REQUEST"
    };
}

export function fetchDataSuccess(items) {
    return {
        type: "FETCH_DATA_SUCCESS",
        items
    };
}

export function fetchDataError(error) {
    return {
        type: "FETCH_DATA_ERROR",
        payload: { error }
    };
}

export const filterByName = (payload) => ({
    type: "FILTER_BY_NAME",
    payload
});
