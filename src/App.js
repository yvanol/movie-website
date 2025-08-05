// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from './pages/Banner/Banner';
import Header from './pages/Header/Header';
import Main from './pages/HomePage/Main';
import Footer from './pages/Footer/Footer';
import BlogPage from './pages/BlogPage/BlogPage'; // new Blog page component
import SchedulePage from './pages/SchedulePage/SchedulePage';
import TrendPage from './pages/TrendPage/TrendPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Main />
          </>
        } />
        <Route path="/blog" element={<BlogPage />} />
         <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/trend" element={<TrendPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
