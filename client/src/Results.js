import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './results.css';


function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { state } = useLocation();
  
    useEffect(() => {
      setIsLoading(true); // Start loading
      fetch(`http://localhost:process.env.PORT/search/${state.query}`)
        .then(response => response.json())
        .then(data => {
          setResults(data);
          setIsLoading(false); // End loading
        })
        .catch(error => {
          console.error('Error:', error);
          setIsLoading(false); // End loading
        });
    }, [state.query]);
  
    return (
        <div className="resultsContainer">
          <div className="backButtonContainer">
            <Link to="/" className="backButton">
              Back
            </Link>
          </div>
          <div className="gridContainer">
            {isLoading ? (
              <Box className="loadingContainer">
                <CircularProgress />
              </Box>
            ) : (
              results.map(result => (
                <div key={result.query} className="resultItem">
                  <h3>{result.query}</h3>
                  <p>{result.description}</p>
                  <a href={result.link}>{result.link}</a>
                </div>
              ))
            )}
          </div>
        </div>
      );
    }
  

export default Results;
