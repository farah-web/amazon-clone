import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Footer from './Footer';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


const promise=loadStripe('pk_test_51J6xgHSESXaaSIoEPJ0EgpxGzVbTYAQnVjVCrqVwyBGvGuJ4vrevc2ZuKTLGbQAronVO2GuTEkoxr9U3uEV8kkOF00DFUvOWbU');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("The authUser is >>> ", authUser)
      if (authUser) {
        // the user just loggedIn / the user was loggedIn
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            <Footer/>
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer/>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer/>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
            <Footer/>
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
