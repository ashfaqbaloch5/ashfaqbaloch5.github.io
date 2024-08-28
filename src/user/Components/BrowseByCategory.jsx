import React, { useState } from 'react';

const BrowseByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Camera');

  // Defining the CategoryCard component inside BrowseByCategory
  const CategoryCard = ({ icon, title, selected }) => {
    return (
      <div
        className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${selected ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
        onClick={() => setSelectedCategory(title)}
      >
        <div className="text-2xl mb-2">
          {icon}
        </div>
        <div className={`text-lg font-semibold ${selected ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </div>
      </div>
    );
  };

  // List of categories with their custom SVG icons
  const categories = [
    { title: 'Phones', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-2H9v-1h3V9h1v4h3v1h-3v2zm0-10h-2a2 2 0 00-2 2v1h2v-1h2v1h2v-1a2 2 0 00-2-2z" /></svg> },
    { title: 'Computers', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v1a3 3 0 003 3h0a3 3 0 003-3v-1M3 10h18M9 3h6v4H9V3z" /></svg> },
    { title: 'SmartWatch', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8m14 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: 'Camera', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h1l1-2h14l1 2h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" /></svg> },
    { title: 'HeadPhones', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 018 0v4m1 10a2 2 0 002-2v-6a2 2 0 00-2-2h-1a2 2 0 00-2 2v6a2 2 0 002 2zm-10 0a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg> },
    { title: 'Gaming', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-2H9v-1h3V9h1v4h3v1h-3v2zm0-10h-2a2 2 0 00-2 2v1h2v-1h2v1h2v-1a2 2 0 00-2-2z" /></svg> },
  ];

  return (
    <div className="px-4">
      <div className="flex items-center mb-4">
        <div className="bg-red-500 h-4 w-4 mr-2 rounded"></div>
        <div className="text-red-500 text-sm font-bold">Categories</div>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Browse By Category</h2>
      <div className="flex justify-between space-x-4">
        {categories.map(category => (
          <CategoryCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            selected={category.title === selectedCategory}
          />
        ))}
      </div>
      <hr className="mt-8 border-gray-300" />
    </div>
  );
};

export default BrowseByCategory;
