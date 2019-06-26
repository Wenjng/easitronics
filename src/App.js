import React from 'react';
import "react-tabs/style/react-tabs.css";
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopBanner from './components/layout/TopBanner'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProductDetails from './components/products/ProductDetails'
import CreateProduct from './components/products/CreateProduct'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      currentPage: 'About'
    });
  }

  render() {

    return (
      <div className="App">
        <TopBanner />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/createproduct' component={CreateProduct} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/' component={Dashboard} />
          </Switch>  
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
