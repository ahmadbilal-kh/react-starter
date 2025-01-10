import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/404/NotFound";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import Admin from "./pages/admin/Admin";
import Register from "./pages/auth/Register";

const App = () => {
  return (
      <>
          <ToastContainer />

      <Header />
      <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
