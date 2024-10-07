import './App.css';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './components/AllRoutes.jsx';
import ScrollToTop from './ScrollToTop.js'; // Import the Scroll component

function App() {
  return (
    
    <><Router>
      <PreNavbar />
      <AllRoutes />
    </Router><ScrollToTop /></>
  );
}

export default App;