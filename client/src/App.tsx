import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GithubProvider } from "./Context/GithubContextData";
import Home from "./Pages/Home";

const Footer = lazy(() => import("./Components/Layout/Footer"));
const Feedback = lazy(() => import("./Pages/FeedbackList"));
const Profile = lazy(() => import("./Pages/Profile"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

function App() {
  return (
    <AnimatePresence mode="wait">
      <GithubProvider>
        <div className="background-settings py-4">
          <main className="container mx-auto px-3 mb-3 tablet:px-2 desktop:px-4 tablet:px-0 sm:max-w-2xl tablet:max-w-3xl laptop:max-w-5xl desktop:max-w-6xl">
            <Suspense fallback="">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/user/:login" element={<Profile />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/notfound" element={<ErrorPage />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </GithubProvider>
    </AnimatePresence>
  );
}

export default App;
