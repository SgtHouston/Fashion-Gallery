import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Page 1  */}
          <Route exact path="/">
            SLR Couture Future Web Page 
          </Route>

          {/* Page 2  */}
          <Route exact path="/about">
            
          </Route>

          {/* Page 3  */}
          <Route exact path="/gallery">
            
          </Route>

          {/* Page 3:  */}
          <Route exact path="/gallery/:galleryId">
            
          </Route>

          {/* Redirect */}
          <Route exact path="*">
            <Redirect to="/">{/* Redirect to homepage like so */}</Redirect>
          </Route>


          


        </Switch>
      </Router>
    </div>
  );
}

export default App;
