import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product.action';

const Products = () => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPicture, setProductPicture] = useState([]);
    const [show, setShow] = useState(false);

    const handleSubmit = () => {
        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('category', categoryId);

        for (const pic of productPicture) {
            form.append('productPicture', pic)
        }
        for (var pair of form.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        dispatch(addProduct(form))

        setShow(false);
    }
    const createCategoryList = (categories, options = []) => {
        for (const category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }
        return options
    }

    const handleProductPicture = (e) => {
        if (e.target.files.length > 0)
            setProductPicture([
                ...productPicture,
                e.target.files[0]
            ])
    }
    // console.log(productPicture);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Layout sidebar >
            <Container>
                <Row md={12} >
                    <Col>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <h3>Products</h3>
                            <button onClick={handleShow} >Add</button>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Input
                        label="Name"
                        value={name}
                        placeholder={'Product Name'}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Quantity"
                        value={quantity}
                        placeholder={'Quantity'}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Input
                        label="Price"
                        value={price}
                        placeholder={'Price'}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                        label="Description"
                        value={description}
                        placeholder={'Description'}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select className='form-control' onChange={e => setCategoryId(e.target.value)} value={categoryId} >
                        <option>select category</option>
                        {
                            createCategoryList(category.categories).map(option => (
                                <option value={option.value} key={option.value} >{option.name}</option>
                            ))
                        }
                    </select>
                    {
                        productPicture.length > 0 ? productPicture.map((pic, index) => <div key={index} >{pic.name}</div>) : null
                    }
                    <input type='file' name="productPicture" onChange={handleProductPicture} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )
}

export default Products
