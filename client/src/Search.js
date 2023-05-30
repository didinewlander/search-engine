import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform the search...
    if (query === '') { alert("You need to provide a query!") }
    else {
      navigate('/results', { state: { query } });
    }
  };

  return (
    <div className="next-container">
      <form onSubmit={handleSearch} className="next-form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="next-input"
        />
        <button type="submit" className="next-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
