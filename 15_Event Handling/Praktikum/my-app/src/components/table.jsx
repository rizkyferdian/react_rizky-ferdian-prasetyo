import React from 'react'

function Table() {
    return (
        <div className="container">
            <table className="table" id="tableProduct">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Freshness</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                    </tr>
                </tbody>
            </table>

            <button type="button" className="btn btn-danger" value="Delete">Delete</button>
        </div>
    )
}

export default Table