import React, { useState } from 'react';
import Navbar from './Navbar'; // Assume you've created this component

const blogItems = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
  // Add more items as needed
];

function App() {
  const [searchResults, setSearchResults] = useState(blogItems);

  const handleSearch = (searchTerm) => {
    const filteredItems = sampleItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredItems);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map(item => (
            <li key={item.id}>{item.name} - {item.category}</li>
          ))}
        </ul>
      </div>
      {/* Other components */}
    </div>
  );
}

export default App;
