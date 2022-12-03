import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import Backnav from './components/Backnav';
function App() {
  return (
    <Router>
      <Routes>
        {/* Navbar as Shared Layout START */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          {/* Navbar as Shared Layout END */}
        </Route>
        {/* Url Params */}
        <Route element={<Backnav />}>
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          {/* Error Page intercepts every routes over mine  */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
