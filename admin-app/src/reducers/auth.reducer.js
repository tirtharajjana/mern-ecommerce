import { authConstants } from "../actions/constantes";

const initialState = {
    name: "Tirtharaj",

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    console.log(action);
    // eslint-disable-next-line default-case
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }


    }
    return state;
}