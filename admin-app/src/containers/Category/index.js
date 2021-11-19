import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory } from '../../actions'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import Modal from '../../components/UI/Modal'
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoMdCheckboxOutline, IoMdCheckbox, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


const Category = () => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('')
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);


    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        setShow(false);

        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));


        setCategoryImage('');
        setCategoryName('');
        setParentCategoryId('');

    }




    const renderCategories = (categories) => {
        let myCategories = [];

        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
            )
        }

        return myCategories
    }

    const createCategoryList = (categories, options = []) => {
        for (const category of categories) {
            options.push({ value: category._id, name: category.name, parentId: category.parentId });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }
        return options
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    const updateCategory = () => {
        setUpdateCategoryModal(true);
        const categories = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId === category.value);
            category && checkedArray.push(category)
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId === category.value);
            category && expandedArray.push(category)
        })
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray)
        console.log({ checkedArray, expandedArray });
    }

    const handleCategoryInput = (key, value, index, type) => {
        if (type === 'checked') {
            const updatedCheckedArray = checkedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);
        } else if (type === 'expanded') {
            const updatedExpandedArray = expandedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpandedArray);
        }
    }


    return (
        <Layout sidebar >
            <Container>
                <Row md={12} >
                    <Col>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <h3>Category</h3>
                            <button onClick={handleShow} >Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} >
                        <CheckboxTree
                            nodes={renderCategories(category.categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}
                            icons={{
                                check: <IoMdCheckbox />,
                                uncheck: <IoMdCheckboxOutline />,
                                halfCheck: <IoMdCheckboxOutline />,
                                expandClose: <IoIosArrowForward />,
                                expandOpen: <IoIosArrowDown />,
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Delete</button>
                        <button onClick={updateCategory} >Edit</button>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} handleClose={handleClose} handleSubmit={handleSubmit} modalTitle={'Add new Category'} >
                <Input
                    value={categoryName}
                    placeholder={'Category Name'}
                    onChange={(e) => setCategoryName(e.target.value)}
                />

                <select className='form-control' onChange={e => setParentCategoryId(e.target.value)} value={parentCategoryId} >
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option => (
                            <option value={option.value} key={option.value} >{option.name}</option>
                        ))
                    }
                </select>

                <input type="file" name='categoryImage' onChange={handleCategoryImage} />
            </Modal>

            {/* Edit category */}
            <Modal show={updateCategoryModal} handleClose={() => setUpdateCategoryModal(false)} handleSubmit={() => setUpdateCategoryModal(false)} modalTitle={'Update Category'} size="lg" >
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
                                        createCategoryList(category.categories).map(option => (
                                            <option value={option.value} key={option.value} >{option.name}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                            <Col>
                                <select className="form-control" >
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
                                        createCategoryList(category.categories).map(option => (
                                            <option value={option.value} key={option.value} >{option.name}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                            <Col>
                                <select className="form-control" >
                                    <option>Select Type</option>
                                    <option value="store" >Store</option>
                                    <option value="product" >Product</option>
                                    <option value="page" >Page</option>
                                </select>
                            </Col>
                        </Row>
                    ))
                }





                {/* <input type="file" name='categoryImage' onChange={handleCategoryImage} /> */}
            </Modal>
        </Layout>
    )
}

export default Category
