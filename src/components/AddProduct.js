import React from 'react';
import { Formik, Form, Field } from 'formik';

function AddProduct() {
    return (
        <div className="add-product-form">
            <h2>Add Product</h2>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    price: '',
                    stock: '',
                    brand: '',
                    category: '',
                    thumbnail: '',
                    images: ''
                }}
                onSubmit={values => {
                    console.log(values);
                    // Handle form submission here
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Title</label>
                            <Field name="title" />
                            {errors.title && touched.title ? <div>{errors.title}</div> : null}
                        </div>
                        <div>
                            <label>Description</label>
                            <Field name="description" />
                            {errors.description && touched.description ? <div>{errors.description}</div> : null}
                        </div>
                        <div>
                            <label>Price</label>
                            <Field name="price" type="number" />
                            {errors.price && touched.price ? <div>{errors.price}</div> : null}
                        </div>
                        <div>
                            <label>Stock</label>
                            <Field name="stock" type="number" />
                            {errors.stock && touched.stock ? <div>{errors.stock}</div> : null}
                        </div>
                        <div>
                            <label>Brand</label>
                            <Field name="brand" />
                            {errors.brand && touched.brand ? <div>{errors.brand}</div> : null}
                        </div>
                        <div>
                            <label>Category</label>
                            <Field name="category" />
                            {errors.category && touched.category ? <div>{errors.category}</div> : null}
                        </div>
                        <div>
                            <label>Thumbnail</label>
                            <Field name="thumbnail" />
                            {errors.thumbnail && touched.thumbnail ? <div>{errors.thumbnail}</div> : null}
                        </div>
                        <div>
                            <label>Images</label>
                            <Field name="images" type="text" />
                            {errors.images && touched.images ? <div>{errors.images}</div> : null}
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddProduct;
