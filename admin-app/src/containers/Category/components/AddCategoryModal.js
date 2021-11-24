import React from "react";
import Input from '../../../components/UI/Input'
import Modal from '../../../components/UI/Modal'
import { Col, Container, Row, Button } from 'react-bootstrap'



const AddCategoryModal = (props) => {
    const { show, handleClose, handleSubmit, modalTitle, categoryName, setCategoryName, parentCategoryId, setParentCategoryId, categoryList, handleCategoryImage } = props;
    return (
        <Modal show={show} handleClose={handleClose} handleSubmit={handleSubmit} modalTitle={'Add new Category'} >
            <Row>
                <Col>
                    <Input
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className='form-control-sm'
                    />
                </Col>
                <Col>
                    <select className='form-control form-control-sm' onChange={e => setParentCategoryId(e.target.value)} value={parentCategoryId} >
                        <option>select category</option>
                        {
                            categoryList.map(option => (
                                <option value={option.value} key={option.value} >{option.name}</option>
                            ))
                        }
                    </select>

                </Col>
            </Row>
            <Row>

                <Col>
                    <input type="file" name='categoryImage' onChange={handleCategoryImage} />
                </Col>
            </Row>






        </Modal>
    )
}


export default AddCategoryModal