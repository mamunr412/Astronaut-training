
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
