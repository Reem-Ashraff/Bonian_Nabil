import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import Header from './pages/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Footer from './pages/footer/footer';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import Services from './pages/services/services';
import Details from './pages/details/details';
import ScrollToTop from './scrollToTop';

function App() {
  const location = useLocation();
  const hiddenRoutes = ["/home"];
  const hideHeaderFooter = location.pathname === "/" || hiddenRoutes.some(route =>
    location.pathname.startsWith(route)
  );
  return (
    <>
    <Router>
      <ScrollToTop/>
      <div className='page-wrapper'>
      <Header></Header>
      <Switch>
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/details/:id" exact component={Details}></Route>
      </Switch>
      {!hideHeaderFooter && <Footer></Footer>}
      </div>
    </Router>
    </>
  );
}

export default App;
