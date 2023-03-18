import React, { useState } from 'react'
import '../App.css'


function Body() {
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState('')

    const [isDescriptionValid, setIsDescriptionValid] = useState(true)
    const [isCategoryValid, setIsCategoryValid] = useState(true)
    const [isImageValid, setIsImageValid] = useState(true)

    const [nameError, setNameError] = useState(false)
    const [priceError, setPriceError] = useState(false)


    const handleProductName = (e) => {
        const value = e.target.value
        if (value.length <= 10) {
            setProductName(value)
            setNameError(false)
        } else {
            setNameError(true)
        }
    }

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

        // description
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

        if (image.trim() === "") {
            setIsImageValid(false)
        } else {
            setIsImageValid(true)
        }

        if (isCategoryValid && isDescriptionValid && isImage) {
            console.log("submitted : ", description, category, image);
        }

    }

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
                            <label className="fw-semibold">Product Name:</label>
                            <input type="text"
                                id="productName"
                                name="productName"
                                className={nameError ? "error form-control border border-danger" : "form-control"}
                                value={productName}
                                onChange={handleProductName}
                            />
                            {nameError && <div className="error-message text-danger">Product name is too long!</div>}
                        </div>
                    </div>

                    {/* Product Category */}
                    <div className="row mt-3">
                        <label className="fw-semibold">Product Category:</label>
                        <div className="col-5">
                            <select id="productCategory" className={!isCategoryValid ? "form-control border border-danger" : "form-control"} value={category} name="productCategory" onChange={(e) => setCategory(e.target.value)}>
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
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            {!isImageValid && <div className="error-message text-danger">Product Image tidak boleh kosong</div>}

                        </div>
                    </div>

                    {/* Product Freshness */}
                    <div className="mt-3">
                        <label className="fw-semibold">Product Freshness:</label><br />
                        <input type="radio" id="brandNew" name="productFreshness" value="Brand New" />
                        <label>Brand New</label><br />
                        <input type="radio" id="secondHand" name="productFreshness" value="Second Hand" />
                        <label>Second Hand</label><br />
                        <input type="radio" id="Refufbished" name="productFreshness" value="Refufbished" />
                        <label>Refufbished</label>
                    </div>

                    {/* Additional Description */}
                    <div className="form-group mt-3">
                        <label className="fw-semibold">Additional Description:</label><br />
                        <textarea
                            className={!isDescriptionValid ? "form-control border border-danger" : "form-control"}
                            id="productDescription"
                            name="productDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>
                        {!isDescriptionValid && <div className="error-message text-danger">Deskripsi tidak boleh kosong</div>}
                    </div>

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
                        <button className="btn btn-primary" value="createProduct" type="submit">Button</button>
                    </div>
                </form>
            </div >

        </>
    )
}

export default Body