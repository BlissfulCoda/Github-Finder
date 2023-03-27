import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Footer from "./Components/Layout/Footer";
import Profile from "./Pages/Profile";
import Feedback from "./Pages/Feedback";
import { GithubProvider } from "./Context/GithubContextData";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="background-settings py-4 ">
          <main className="container mx-auto px-4 tablet:px-0 tablet:max-w-3xl laptop:max-w-5xl  desktop:max-w-6xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:login" element={<Profile />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/notfound" element={<ErrorPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
