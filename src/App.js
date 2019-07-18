import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Error from './pages/Error';
import Product from './pages/Product';
import News from './pages/News';
import Promotion from './pages/Promotion';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Mycart from './pages/Mycart';
import './Assets/css/styles.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/Product" component={Product} />
          <Route  path="/ProductDetail/" component={ProductDetail} />
          <Route  path="/News" component={News} />
          <Route path="/Promotion" component={Promotion} />
          <Route path="/Mycart" component={Mycart}  />
          <Route component={Error} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;