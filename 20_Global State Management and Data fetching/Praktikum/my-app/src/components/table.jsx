import React from 'react';
import { useSelector } from 'react-redux';

function ProductTable() {
    const products = useSelector(state => state.products);

    return (
        <div className="container">
            <table className="table" id="tableProduct">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Freshness</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.newId}</td>
                            <td>
                                {product.newProductImage && (
                                    <img src={URL.createObjectURL(product.newProductImage)} width={200} alt={product.name} />
                                )}
                            </td>
                            <td>{product.newProductName}</td>
                            <td>{product.newProductCategory}</td>
                            <td>{product.newProductFreshness}</td>
                            <td>{product.newDescription}</td>
                            <td>{product.newProductPrice}</td>
                            <td>
                                <button className='btn btn-danger' data-toggle="modal" data-target="#exampleModal"
                                    onClick={() => handleDeleteProduct(product)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;