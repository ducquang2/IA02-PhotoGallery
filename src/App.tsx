import { Link, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import PhotoDetailPage from './libs/pages/PhotoDetailPage';
import PhotoListPage from './libs/pages/PhotoListPage';

function Main() {
  const location = useLocation();

  return (
    <div className="container mx-auto p-4">
      {(location.pathname !== '/photos' && !location.pathname.startsWith('/photos/')) && (
        <div className="mb-4">
          <Link to="/photos">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Go to Photos
            </button>
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/photos" element={<PhotoListPage />} />
        <Route path="/photos/:id" element={<PhotoDetailPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;