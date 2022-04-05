import { Header } from "./components/Header";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from "./About";

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import InputForm from "./components/InputForm";

import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="head">
                  <Header title="Feedback UI"></Header>
                </div>

                <div className="container">
                  <Link to="/about">
                    <h2 className="aboutt">About</h2>
                  </Link>
                  <InputForm />

                  <FeedbackStats></FeedbackStats>

                  <FeedbackList />
                </div>
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
