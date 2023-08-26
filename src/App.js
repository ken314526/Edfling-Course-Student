import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page68 from "./Pages/Page68";
import Page69 from "./Pages/Page69";
import Page1 from "./Pages/Page1";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Profile from "./Pages/profile/profile";
import Page67 from "./Pages/Page67";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Page69 />} />
          <Route path="/certificate" element={<Page68 />} />
          <Route path="/coursenotes" element={<Page67 />} />
          <Route path="/contactus" element={<Page1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
