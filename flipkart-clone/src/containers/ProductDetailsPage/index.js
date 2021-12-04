import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import "./style.css";
import { addToCart } from "../../actions";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product)

    const { productId } = useParams();
    useEffect(() => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        // console.log(productId);
        const payload = {
            params: {
                productId
            }
        }
        dispatch(getProductDetailsById(payload))
    }, [])

    return (
        <Layout>
            <p>{product.productDetails.name}</p>
        </Layout>
    )
}

export default ProductDetailsPage
