import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPage } from '../../../actions'
import getParams from '../../../uitls/getParams';
import { useLocation } from 'react-router';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';

const ProductPage = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    const location = useLocation();
    const { page } = product;
    useEffect(() => {
        const params = getParams(location.search)
        const payload = {
            params
        }
        // console.log(payload);
        dispatch(getProductPage(payload))
    }, [])

    return (
        <div style={{ margin: '0 10px' }} >
            <h3>{page.title}</h3>

            <Carousel
                renderThumbs={() => { }}
            >
                {
                    page.banners && page.banners.map((banner, index) =>
                        <a style={{ display: 'block' }} key={index} href={banner.navigateTo} >
                            <img src={`http://localhost:2000${banner.img}`} alt='' />

                        </a>
                    )
                }
            </Carousel>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '10px 0' }} >
                {
                    page.products && page.products.map((product, index) => (
                        <Card key={index} style={{ width: '400px', height: '200px', margin: ' 5px' }} >
                            <img style={{ width: '100%', height: '100%' }} alt='' src={`http://localhost:2000${product.img}`} />
                        </Card>)
                    )
                }
            </div>
        </div>
    )
}

export default ProductPage
