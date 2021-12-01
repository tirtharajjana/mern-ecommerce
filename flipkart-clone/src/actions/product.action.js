import axiosInstance from "../helpers/axios"
import { productConstants } from "./constantes"

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/products/${slug}`)
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        }
        else {
            // dispatch
        }
    }
}

export const getProductPage = (payload) => {
    return async dispatch => {
        try {

            const { cid, type } = payload.params;
            // console.log({ cid, type });
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST })
            const res = await axiosInstance.get(`/page/${cid}/${type}`)
            console.log(res);

            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                })
            }
            else {
                // dispatch
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}