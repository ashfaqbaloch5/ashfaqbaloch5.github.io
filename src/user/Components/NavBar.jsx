const NavBar = () => {
  return (
    <>
      <nav className="bg-white py-4 shadow">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="text-2xl font-bold text-black">
            Exclusive
          </div>

          {/* Center - Links */}
          <div className="flex-grow flex justify-center">
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-black">
                Home
              </a>
              <a href="/products" className="text-gray-700 hover:text-black">
                Product List
              </a>
              <a href="/wishlist" className="text-gray-700 hover:text-black">
              Wishlist
              </a>
              <a href="/contact" className="text-gray-700 hover:text-black">
                Contact
              </a>
              <a href="/admin" className="text-gray-700 hover:text-black">
                Admin page
              </a>
              <a href="/about" className="text-gray-700 hover:text-black">
                About
              </a>
              <a href="/signup" className="text-gray-700 hover:text-black">
                Sign Up
              </a>
            </div>
          </div>

          {/* Right side - Search, Language Selector, Cart */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking?"
                className="text-sm py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-black">
                🔍
              </button>
            </div>

            {/* Language Selector */}
            <div className="text-gray-700">
              English
            </div>

            {/* Cart Icon */}
            <div className="text-gray-700">
              <a href="/cart">🛒</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
