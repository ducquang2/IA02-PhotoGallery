import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import pagesAvailable from './libs/pages';
import ErrorPage from './libs/pages/ErrorPage';

function Main() {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        {pagesAvailable.map((item, idx: number) => (
          <Route
            key={`${idx}_${item.path}`}
            path={item.path}
            element={
              <item.page />
            }
          />
        ))}

        <Route
          path="/"
          element={
            <Navigate replace to={pagesAvailable.length > 0 ? '/photos' : '/error'} />
          }
        />
        <Route path="*" element={<ErrorPage status={404} message="Page not found." />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;