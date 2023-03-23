import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';


function App() {

  return (
    <Router>
      <div className="background-settings">
        <main className="container mx-auto">
          <Routes>
            <Route path="/notfound" element={<ErrorPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
