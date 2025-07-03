import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load your pages
const Home = React.lazy(() => import('./screens/Home/Home'));
const About = React.lazy(() => import('./screens/About/About'));
const Contact = React.lazy(() => import('./screens/Contact'));
const Product = React.lazy(() => import('./screens/Products/Products'));



function App() {
  return (
    <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <ScrollToTop />
          <main className="flex-grow">
           <Suspense fallback={<div>Loading Page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
             </Suspense>
          </main>

          <Footer />
        </div>
     
    </Router>
  );
}

export default App;
