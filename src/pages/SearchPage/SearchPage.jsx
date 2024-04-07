import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as searchAPI from '../../utilities/search-api';
import SearchResultCard from '../../components/SearchResultCard';

function SearchPage() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  async function fetchSearchResults() {
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get('searchTerm');
    const searchQuery = searchTerm.toString();
    // const searchQuery = urlParams.toString();
    console.log('searchQuery:', searchQuery);
    try {
      const searchResults = await searchAPI.searchBlogs(searchQuery);
      setResults(searchResults);
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  }

  useEffect(() => {
    if (location.search) {
      fetchSearchResults();
    }
  }, [location.search]);

  const searchResultCards = results.map((r, index) => <SearchResultCard key={index} result={r} />)

  return (
    <div className='row justify-content-center'>
      <h1 class="blog-text">Search Results:</h1>
      <ul className="search-result-list d-flex flex-wrap col-lg-8 ">
        {searchResultCards}
      </ul>
    </div>
  );
}

export default SearchPage;
