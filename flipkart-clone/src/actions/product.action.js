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
        const { cid, type } = payload;
        const res = await axiosInstance.get(`/page/${cid}/${type}`)
        console.log(res);
        if (res.status === 200) {

        }
        else {
            // dispatch
        }
    }
}