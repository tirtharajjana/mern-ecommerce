import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import { useParams } from 'react-router';
import './style.css'
import { generatePublicUrl } from '../../urlConfig';

const ProductListPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30: 30000
    });

    const { slug } = useParams();


    useEffect(() => {
        dispatch(getProductsBySlug(slug))
    }, [])

    return (
        <div>
            <Layout>
                {
                    Object.keys(product.productsByPrice).map((key, index) => {
                        return (
                            <div className="card">
                                <div className="cardHeader">
                                    <div>{slug} mobile under  {priceRange[key]}</div>
                                    <button>view all</button>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    {
                                        product.productsByPrice[key].map(product =>
                                            <div className="productContainer">
                                                <div className="productImgContainer">
                                                    <img src={generatePublicUrl(product.productPicture[0].img)} alt="" />
                                                </div>
                                                <div className="productInfo">
                                                    <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                    <div>
                                                        <span>4.3</span>&nbsp;
                                                        <span>3353</span>
                                                    </div>
                                                    <div className="productPrice">{product.price}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </Layout>
        </div>
    )
}

export default ProductListPage
