import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import App from "./App";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import Compliance from "./pages/Compliance";
import ApiDocs from "./pages/ApiDocs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Features from "./pages/Features";
import Sitemap from "./pages/Sitemap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

export default function Router() {
  const [, setMobileNav] = useState(false);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header setMobileNav={setMobileNav} />
        <Routes>
          <Route path='/' element={<App setMobileNav={setMobileNav} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/docs' element={<Documentation />} />
          <Route path='/support' element={<Support />} />
          <Route path='/api' element={<ApiDocs />} />
          <Route path='/compliance' element={<Compliance />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/sitemap' element={<Sitemap />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </ErrorBoundary>
    </BrowserRouter>
  );
}
