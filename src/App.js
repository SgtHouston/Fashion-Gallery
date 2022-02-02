import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Lookbook from "./Pages/Lookbook";
import Contact from "./Pages/Contact";
import Clients from "./Pages/Clients";
import Faqs from "./Pages/Faqs";
import Terms from "./Pages/Terms";


function App() {
  return (
    <div className="App">
      < Router >
        < Routes>

          {/* Page 1  */}
          < Route exact path="/" element={<Home/>} />

          {/* Page 2  */}
          < Route exact path="/about" element={<About/>} />


          {/* Page 3  */}
          < Route exact path="/lookbook" element={<Lookbook/>} />
      

          {/* Page 4  */}
          < Route exact path="/contact" element={<Contact/>} />


          {/* Page 5  */}
          < Route exact path="/clients" element={<Clients/>} />

          {/* Page 6  */}
          < Route exact path="/faqs" element={<Faqs/>} />
          

          {/* Page 7  */}
          < Route exact path="/terms" element={<Terms/>} />
          

          {/* Redirect */}
          <Route exact path="*"  element={<Navigate to="/" />} />
          {/* Redirect to homepage */}
          
          
        </ Routes>
        
      </ Router>
    </div>
  );
}

export default App;
