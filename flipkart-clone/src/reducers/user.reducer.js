import { userConstants } from "../actions/constants";

const initState = {
    address: [],
    orders: [],
    error: null,
    loading: false,
    orderFetching: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case userConstants.GET_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case userConstants.GET_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address: action.payload.address,
                loading: false,
            };
            break;
        case userConstants.GET_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
        case userConstants.ADD_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case userConstants.ADD_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address: action.payload.address,
                loading: false,
            };
            break;
        case userConstants.ADD_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
        case userConstants.GET_USER_ORDER_REQUEST:
            state = {
                ...state,
                orderFetching: true,
            };
            break;
        case userConstants.GET_USER_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
                orderFetching: false,
            };
            break;
        case userConstants.GET_USER_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                orderFetching: false,
            };
            break;
    }

    return state;
};