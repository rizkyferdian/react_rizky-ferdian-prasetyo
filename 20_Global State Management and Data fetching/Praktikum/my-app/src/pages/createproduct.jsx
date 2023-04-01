import React from 'react'
import Body from '../components/body'
import Navbar from '../components/navbar'
import ProductTable from '../components/table'
import Title from '../components/title'

function CreateProduct() {
    return (
        <>
            <Navbar />
            <Title />
            <Body />
            <ProductTable />
        </>
    )
}

export default CreateProduct