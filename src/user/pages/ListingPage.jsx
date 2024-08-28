import React from 'react';
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import ProductListingPage from '../Components/ProductListing';
import Footer from '../Components/Footer';


const ListingPage = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <ProductListingPage/>
        <Footer/>

    </div>
  )
}

export default ListingPage