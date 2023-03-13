import React from 'react'

function Body() {
    return (
        <>
            <div className="container d-grid col-5 mt-5">
                <form id="productForm">
                    <div className=" row">
                        <div className="col">
                            <h3 className="fw-semibold">Detail Form</h3>
                        </div>
                    </div>

                    {/* Product Name */}
                    <div className="row">
                        <div className="col-6">
                            <label className="fw-semibold">Product Name:</label>
                            <input type="text" id="productName" name="productName" className=" form-control" />
                        </div>
                    </div>

                    {/* Product Category */}
                    <div className="row mt-3">
                        <label className="fw-semibold">Product Category:</label>
                        <div className="col-5">
                            <select className="form-select" id="productCategory" name="productCategory">
                                <option value="">Choose</option>
                                <option value="Makanan">Makanan</option>
                                <option value="Minuman">Minuman</option>
                                <option value="Baju">Baju</option>
                            </select>
                        </div>
                    </div>

                    {/* product Image */}
                    <div className="row mt-3">
                        <div className="col-5">
                            <label className="form-label fw-semibold">Image of product</label>
                            <input type="file" className="form-control" id="uploadFile" />
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
                        <textarea className="form-control" id="productDescription" name="productDescription"></textarea>
                    </div>

                    {/* Product Price */}
                    <div className="form-outline mx-auto mt-3">
                        <label className="fw-semibold">Product Price:</label>
                        <input className="form-control" type="number" id="productPrice" name="productPrice" />
                    </div>

                    <div className="d-grid p-4 mt-5 mx-auto">
                        <button className="btn btn-primary" value="createProduct" type="submit">Button</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Body