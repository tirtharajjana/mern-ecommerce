import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import ProductStore from './ProductStore'


const ProductListPage = (props) => {

    const renderProduct = () => {
        console.log({ props });
    }
    return (
        <div>
            <Layout>
                <ProductStore {...props} />
                {renderProduct()}
            </Layout>
        </div>
    )
}

export default ProductListPage
