import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';



function Body() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [productPrice, setProductPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState(null)
    const [freshness, setProductFreshness] = useState('')
    const [products, setProducts] = useState([])
    const [isDescriptionValid, setIsDescriptionValid] = useState(true)
    const [isCategoryValid, setIsCategoryValid] = useState(true)
    const [isImageValid, setIsImageValid] = useState(true)
    const [isFreshnessValid, setIsFreshnessValid] = useState(true)
    const [nameError, setNameError] = useState(false)
    const [priceError, setPriceError] = useState(false)
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const handleProductImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleProductPrice = (e) => {
        const value = e.target.value;
        if (/^[0-9]+$/.test(value)) {
            setProductPrice(value);
            setPriceError(false);
        } else {
            setPriceError(true);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim() === "") {
            setIsDescriptionValid(false)
        } else {
            setIsDescriptionValid(true)
        }

        if (category.trim() === "") {
            setIsCategoryValid(false)
        } else {
            setIsCategoryValid(true)
        }


        if (freshness.trim() === "") {
            setIsFreshnessValid(false)
        } else {
            setIsFreshnessValid(true)
        }

        if (isFreshnessValid && isCategoryValid && isDescriptionValid && isImageValid) {
            const newProduct = {
                newId: uuidv4().split("-")[1],
                image,
                name,
                category,
                freshness,
                newDescription: description,
                newProductPrice: productPrice
            }

            setProducts([...products, newProduct])
            setImage(null)
            setName("")
            setCategory("")
            setDescription("")
            setProductPrice("")
        }
    }

    const handleDeleteProduct = (product) => {
        setProductToDelete(product);
        setShowDeleteAlert(true);
    };

    const handleConfirmDelete = () => {
        const deletedProducts = products.filter(
            (product) => product.newId !== productToDelete.newId
        );
        setProducts(deletedProducts);
        setProductToDelete(null);
        setShowDeleteAlert(false);
    };

    const handleCancelDelete = () => {
        setProductToDelete(null);
        setShowDeleteAlert(false);
    };


    return (
        <>
            <div className="container d-grid col-5 mt-5">
                <form id="productForm" onSubmit={handleSubmit}>
                    <div className=" row">
                        <div className="col">
                            <h3 className="fw-semibold">Detail Form</h3>
                        </div>
                    </div>

                    {/* Product Name */}
                    <div className="row">
                        <div className="col-6">
                            <label>
                                Nama:
                                <input className={nameError ? " form-control border border-danger" : "form-control"} type="text" value={name} onChange={handleNameChange} />
                            </label>
                            {nameError && <div className="error-message text-danger">Product name is too long!</div>}
                        </div>
                    </div>

                    {/* Product Category */}
                    <div className="row mt-3">
                        <label className="fw-semibold">Product Category:</label>
                        <div className="col-5">
                            <select id="productCategory" className={!isCategoryValid ? "form-select border border-danger" : "form-select"} value={category} name="productCategory" onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Choose</option>
                                <option value="Makanan">Makanan</option>
                                <option value="Minuman">Minuman</option>
                                <option value="Baju">Baju</option>
                            </select>
                            {!isCategoryValid && <div className="error-message text-danger">Product Category tidak boleh kosong</div>}
                        </div>
                    </div>

                    {/* product Image */}
                    <div className="row mt-3">
                        <div className="col-5">
                            <label className="form-label fw-semibold">Image of product</label>
                            <input
                                type="file"
                                className="form-control"
                                id="uploadFile"
                                onChange={handleProductImageChange}
                            />
                            {!isImageValid && <div className="error-message text-danger">Product Image tidak boleh kosong</div>}

                        </div>
                    </div>

                    {/* Product Freshness */}
                    <div className="mt-3">
                        <label className="fw-semibold">Product Freshness:</label><br />
                        <input type="radio"
                            id="brandNew"
                            name="productFreshness"
                            value="Brand New"
                            checked={freshness === 'Brand New'}
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <label>Brand New</label><br />
                        <input type="radio"
                            id="secondHand"
                            name="productFreshness"
                            value="Second Hand"
                            checked={freshness === 'Second Hand'}
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <label>Second Hand</label><br />
                        <input type="radio"
                            id="Refufbished"
                            name="productFreshness"
                            value="Refufbished"
                            checked={freshness === 'Refufbished'}
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <label>Refufbished</label>
                        {!isFreshnessValid && <div className="error-message text-danger">Product Freshness tidak boleh kosong</div>}
                    </div>
                    <label>
                        Deskripsi:
                        <textarea className={!isDescriptionValid ? "form-control border border-danger" : "form-control"}
                            value={description} onChange={handleDescriptionChange} />
                        {!isDescriptionValid && <div className="error-message text-danger">Deskripsi tidak boleh kosong</div>}
                    </label>

                    {/* Product Price */}
                    <div className="form-outline mx-auto mt-3">
                        <label className="fw-semibold">Product Price:</label>
                        <input
                            type="text"
                            id="productPrice"
                            name="productPrice"
                            className={priceError ? "error form-control border border-danger" : "form-control"}
                            value={productPrice}
                            onChange={(e) => handleProductPrice(e)}
                        />
                        {priceError && <div className="error-message text-danger">Product Price must be number!</div>}
                    </div>

                    <div className="d-grid p-4 mt-5 mx-auto">
                        <button type="submit">Tambahkan Produk</button>
                    </div>
                </form>
            </div >

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

                {showDeleteAlert && (
                    toast((t) => (
                        <span>
                            Apakah anda ingin menghapus {productToDelete.name}?
                            <div className='flex mt-1'>
                                <button className='btn btn-outline-secondary btn-sm' onClick={() => {
                                    handleCancelDelete()
                                    toast.dismiss(t.id)
                                }}>
                                    Dismiss
                                </button>
                                <button className='btn btn-danger btn-sm ms-2' onClick={() => {
                                    handleConfirmDelete()
                                    toast.dismiss(t.id)
                                }}>
                                    Delete
                                </button>
                            </div>
                        </span>
                    ))
                )}
            </div>
        </>
    )
}

export default Body