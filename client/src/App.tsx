import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Footer from "./Components/Layout/Footer";
import Profile from "./Pages/Profile";
import Feedback from "./Pages/FeedbackList";
import { GithubProvider } from "./Context/GithubContextData";

function App() {
  return (
    <AnimatePresence mode="wait">
      <GithubProvider>
        <Router>
          <div className="background-settings py-4 dark:bg-black">
            <main className="container mx-auto px-2 tablet:px-2 desktop:px-4 tablet:px-0 sm:max-w-2xl tablet:max-w-3xl laptop:max-w-5xl desktop:max-w-6xl">
              <Routes location={location}>
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
    </AnimatePresence>
  );
}

export default App;
