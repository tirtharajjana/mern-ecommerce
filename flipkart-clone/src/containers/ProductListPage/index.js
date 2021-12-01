import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import ProductStore from './ProductStore'
import { useLocation } from 'react-router-dom'
import getParams from '../../uitls/getParams'
import ProductPage from './ProductPage'


const ProductListPage = (props) => {
    const location = useLocation();

    const renderProduct = () => {
        // console.log(location);
        const params = getParams(location.search);
        // console.log(params);
        let content = null;
        switch (params.type) {
            case 'store':
                content = <ProductStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content = null
                break;
        }
        return content;
    }
    return (
        <div>
            <Layout>
                {/* <ProductStore {...props} /> */}
                {renderProduct()}
            </Layout>
        </div>
    )
}

export default ProductListPage
