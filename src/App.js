import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/about";
import HomeMain from "./components/HomeMain";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} exact />
          <Route path="/about" element={<About />} />
          {/* <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
