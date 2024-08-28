
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import BannerSection from "../Components/BannerSection";
import FlashSale from "../Components/FlashSale";
import BrowseByCategory from "../Components/BrowseByCategory";
import BestSellingProducts from "../Components/BestSellingProducts";
import SomeProducts from "../Components/SomeProducts";
import Footer from "../Components/Footer";
const LandingPage = () => {
    const products = [
        { id: 1, imgSrc: 'path_to_image1', name: 'Product 1', price: '$100', rating: 4.5, reviews: 20 },
        { id: 2, imgSrc: 'path_to_image2', name: 'Product 2', price: '$200', rating: 4.0, reviews: 15 },
        // Add more products as needed
      ];
    return (
    <div>
        <Header/>
    <NavBar/>
    <BannerSection/>
    <FlashSale/>
    <BrowseByCategory/>
    <BestSellingProducts/>
    <SomeProducts products={products}/>
    <Footer/>
    </div>
  )
}

export default LandingPage