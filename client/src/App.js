import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Search';
import Results from './Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
