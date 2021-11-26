import React from "react";
import Input from '../../../components/UI/Input'
import Modal from '../../../components/UI/Modal'
import { Col, Container, Row, Button } from 'react-bootstrap'


const UpdateCategoriesModal = (props) => {
    const { show,
        size,
        handleClose,
        handleSubmit,
        modalTitle,
        expandedArray,
        checkedArray,
        handleCategoryInput,
        categoryList
    } = props;
    console.log(expandedArray, checkedArray);
    return (
        <Modal show={show} handleClose={handleClose} handleSubmit={handleSubmit} modalTitle={modalTitle} size={size} >
            <Row>
                <Col>
                    <h6>Expanded</h6>
                </Col>
            </Row>
            {
                expandedArray.length > 0 &&
                expandedArray.map((item, index) => (
                    <Row key={index} >
                        <Col>
                            <Input
                                value={item.name}
                                placeholder={'Category Name'}
                                onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
                            />
                        </Col>
                        <Col>
                            <select className='form-control' onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')} value={item.parentId} >
                                <option>select category</option>
                                {
                                    categoryList.map(option => (
                                        <option value={option.value} key={option.value} >{option.name}</option>
                                    ))
                                }
                            </select>
                        </Col>
                        <Col>
                            <select className="form-control" value={item.type} onChange={(e) => handleCategoryInput('type', e.target.value, index, 'expanded')} >
                                <option>Select Type</option>
                                <option value="store" >Store</option>
                                <option value="product" >Product</option>
                                <option value="page" >Page</option>
                            </select>
                        </Col>
                    </Row>
                ))

            }
            <Row>
                <Col>
                    <h6>Checked</h6>
                </Col>
            </Row>
            {
                checkedArray.length > 0 &&
                checkedArray.map((item, index) => (
                    <Row key={index} >
                        <Col>
                            <Input
                                value={item.name}
                                placeholder={'Category Name'}
                                onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
                            />
                        </Col>
                        <Col>
                            <select className='form-control' onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')} value={item.parentId} >
                                <option>select category</option>
                                {
                                    categoryList.map(option => (
                                        <option value={option.value} key={option.value} >{option.name}</option>
                                    ))
                                }
                            </select>
                        </Col>
                        <Col>
                            <select className="form-control" value={item.type} onChange={(e) => handleCategoryInput('type', e.target.value, index, 'checked')} >
                                <option>Select Type</option>
                                <option value="store" >Store</option>
                                <option value="product" >Product</option>
                                <option value="page" >Page</option>
                            </select>
                        </Col>
                    </Row>
                ))
            }






        </Modal>
    )
}

export default UpdateCategoriesModal;