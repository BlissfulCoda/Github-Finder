import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import { GithubProvider } from "./Context/GithubContextData";

function App() {

  return (
    <GithubProvider>
      <Router>
        <div className="background-settings">
          <main className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notfound" element={<ErrorPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
