import { authConstants } from "./constantes";

export const login = (user) => {

    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload: {
                ...user
            },
        });
    };
};
