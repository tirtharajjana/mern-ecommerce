
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:slug' element={<ProductListPage />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
