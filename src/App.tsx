import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from './components/Navbar'
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Projects from './pages/Projects';
import About from './pages/About';
import Services from "./pages/Services";


function App() {
  return (
    <Router basename={`/portafolio`}>
      <div className="App min-h-screen">
        <Navbar></Navbar>
        <div className="-mt-14 pt-14 -mb-7 pb-7 min-h-screen">
          <Switch>
            <Route path="/contact"><Contact></Contact></Route>
            <Route path="/projects"><Projects></Projects></Route>
            <Route path="/about"><About></About></Route>
            <Route path="/services"><Services></Services></Route>
            <Route path=""><Main></Main></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}


export default App;
