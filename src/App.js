import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
      < Router>
        < Switch>

          {/* Page 1  */}
          < Route exact path="/">
            < Home /> 
          </ Route>

          {/* Page 2  */}
          < Route exact path="/about">
            < About />
          </ Route>

          {/* Page 3  */}
          < Route exact path="/lookbook">
            < Lookbook />
          </ Route>

          {/* Page 4  */}
          < Route exact path="/contact">
            < Contact />
          </ Route>

          {/* Page 5  */}
          < Route exact path="/clients">
            < Clients />
          </ Route>

          {/* Page 6  */}
          < Route exact path="/faqs">
            < Faqs />
          </ Route>

          {/* Page 7  */}
          < Route exact path="/terms">
            < Terms />
          </ Route>


          {/* Redirect */}
          < Route exact path="*">
            < Redirect to="/">{/* Redirect to homepage */}</Redirect>
          </ Route>


          


        </ Switch>
      </ Router>
    </div>
  );
}

export default App;
