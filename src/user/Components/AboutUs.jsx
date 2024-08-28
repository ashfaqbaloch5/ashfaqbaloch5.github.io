
const AboutUs = () => {
    const teamMembers = [
        { id: 1, name: 'Tom Cruise', title: 'Founder & Chairman', imageUrl: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Emma Watson', title: 'Managing Director', imageUrl: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Will Smith', title: 'Product Designer', imageUrl: 'https://via.placeholder.com/100' },
        { id: 4, name: 'Jennifer Aniston', title: 'Marketing Head', imageUrl: 'https://via.placeholder.com/100' },
        { id: 5, name: 'Leonardo DiCaprio', title: 'Tech Lead', imageUrl: 'https://via.placeholder.com/100' },
        { id: 6, name: 'Chris Hemsworth', title: 'HR Head', imageUrl: 'https://via.placeholder.com/100' },
        { id: 7, name: 'Scarlett Johansson', title: 'Sales Lead', imageUrl: 'https://via.placeholder.com/100' }
      ];
    
      return (
        <div className="min-h-screen bg-gray-50 p-8 space-y-8 px-4">
          {/* Our Story Section */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600 mt-4">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by...
            </p>
            <div className="mt-8">
              <img
                src="https://via.placeholder.com/500x300" // Replace with actual image URL
                alt="Our Story"
                className="rounded-md w-full h-auto"
              />
            </div>
          </section>
    
          {/* Statistics Section */}
          <section className="flex flex-col md:flex-row justify-around bg-white shadow-md rounded-lg p-6 space-y-4 md:space-y-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">10.5k</h3>
              <p className="text-gray-600">Sellers active on our site</p>
            </div>
            <div className="text-center bg-red-500 text-white rounded-lg p-4">
              <h3 className="text-2xl font-bold">33k</h3>
              <p>Monthly Product Sale</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">45.5k</h3>
              <p className="text-gray-600">Customer active in our site</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">25k</h3>
              <p className="text-gray-600">Annual gross sale in our site</p>
            </div>
          </section>
    
          {/* Team Members Section */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex-shrink-0 bg-gray-100 rounded-lg p-4 w-60 shadow-md">
                    <img src={member.imageUrl} alt={member.name} className="rounded-full w-24 h-24 mx-auto" />
                    <h3 className="text-center text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                    <p className="text-center text-gray-600">{member.title}</p>
                    <div className="flex justify-center mt-4 space-x-2">
                      <span className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12 0 4.991 3.052 9.26 7.428 11.144-.101-.951-.188-2.419.039-3.463.205-.957 1.32-6.08 1.32-6.08s-.336-.673-.336-1.668c0-1.563.908-2.728 2.038-2.728.961 0 1.427.72 1.427 1.584 0 .964-.616 2.411-.936 3.757-.27 1.136.578 2.063 1.71 2.063 2.052 0 3.628-2.167 3.628-5.29 0-2.764-1.989-4.697-4.83-4.697-3.291 0-5.23 2.469-5.23 5.025 0 .988.372 2.048.838 2.625.092.112.105.211.08.324-.087.36-.276 1.138-.314 1.295-.05.21-.163.255-.379.155-1.411-.648-2.287-2.676-2.287-4.31 0-3.505 2.549-6.732 7.354-6.732 3.855 0 6.851 2.745 6.851 6.407 0 3.824-2.406 6.91-5.742 6.91-1.122 0-2.177-.583-2.54-1.26l-.69 2.634c-.249.949-.926 2.132-1.382 2.855 1.043.321 2.145.495 3.295.495 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                        </svg>
                      </span>
                      <span className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.004 0c-6.633 0-12 5.372-12 12.004s5.367 12.004 12.004 12.004c6.632 0 12.003-5.372 12.003-12.004s-5.371-12.004-12.003-12.004zm4.93 8.001c.006.137.009.276.009.414 0 4.221-3.214 9.089-9.089 9.089-1.806 0-3.484-.529-4.899-1.438.25.03.506.045.764.045 1.5 0 2.882-.511 3.981-1.372-1.402-.026-2.584-.952-2.993-2.225.195.037.396.056.6.056.292 0 .576-.04.845-.112-1.466-.295-2.572-1.589-2.572-3.141v-.04c.431.24.925.385 1.45.402-1.057-.705-1.75-1.91-1.75-3.274 0-.722.195-1.398.536-1.978 1.951 2.396 4.868 3.974 8.153 4.141-.067-.288-.101-.59-.101-.898 0-2.178 1.767-3.946 3.945-3.946 1.136 0 2.164.479 2.885 1.249.898-.176 1.744-.505 2.507-.958-.295.919-.921 1.689-1.737 2.177.798-.093 1.56-.307 2.266-.618-.53.792-1.198 1.486-1.971 2.04z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
}

export default AboutUs