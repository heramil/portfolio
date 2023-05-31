import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function App() {
  return (
    <div className="app-routes">
      <Router>
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
