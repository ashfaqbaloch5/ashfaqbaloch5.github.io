import Iphone14 from './images/iphone14.jpeg';
import apple from './images/apple.png'
const BannerSection = () => {
  return (
    <>
    <div className="flex bg-white p-8 px-4">
      {/* Sidebar with Categories */}
      

      {/* Main Banner */}
      <div className="w-3/4 flex justify-center items-center bg-black text-white p-8 rounded-lg ml-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={apple} alt="Apple Logo" />
            <span className="text-sm">iPhone 14 Series</span>
          </div>
          <h2 className="text-3xl font-bold">Up to 10% off Voucher</h2>
          <div className="flex justify-center mt-6">
      <button className="text-white py-2 px-4 rounded hover:bg-black underline">
       Shop Now
      </button>
    </div>
        </div>
        <div className="ml-8">
          <img
            src={Iphone14}
            alt="iPhone"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-300 my-4" />
    </>
  )
}

export default BannerSection