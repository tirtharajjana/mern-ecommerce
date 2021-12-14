import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../uitls/getParams";
import ClothingAndAccessories from "./ClothingAndAccessories";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";
import { useLocation } from "react-router-dom";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
    const renderProduct = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const params = useParams();
        // console.log({ params });
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const location = useLocation();
        const params = getParams(location.search);
        let content = null;
        switch (params.type) {
            case "store":
                content = <ProductStore {...props} />;
                break;
            case "page":
                content = <ProductPage {...props} />;
                break;
            default:
                content = <ClothingAndAccessories {...props} />;
        }

        return content;
    };

    return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;