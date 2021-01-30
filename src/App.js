import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { StaticRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
//! COMPONENTS~
import Navbar from '../src/components/NavHamburger/Navbar.component';
import Footer from '../src/components/Footer/Footer.component';
//! PAGES~
import Home from '../src/containers/Home';
import About from '../src/containers/About';
import Portfolio from '../src/containers/Portfolio';
import Coding from '../src/containers/Coding';
import Logos from '../src/containers/Logos';
import Typography from '../src/containers/Typography';
import Contact from '../src/containers/Contact';

import Buttons from '../src/containers/Elements/Buttons';
import Headings from '../src/containers/Elements/Headings';
import Slides from '../src/containers/Elements/Slides';
import Loading from './components/Loading/Loading';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import InitialTransition from './components/InitialTransition/InitialTransition';

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => setLoading(false), 1500);
   }, []);

   return (
      <Router>
         {/* <InitialTransition/> */}
         <ScrollToTop />
         {loading === false ? (
            <div className='App'>
               <CustomCursor />

               <Navbar />
               <Switch>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/portfolio' component={Portfolio} />
                  <Route exact path='/coding' component={Coding} />
                  <Route exact path='/logos' component={Logos} />
                  <Route exact path='/typography' component={Typography} />
                  <Route exact path='/contact' component={Contact} />

                  <Route exact path='/buttons' component={Buttons} />
                  <Route exact path='/headings' component={Headings} />
                  <Route exact path='/slides' component={Slides} />

                  <Route exact path='/' component={Home} />
               </Switch>
               <Footer />
            </div>
         ) : (
            <Loading />
         )}
      </Router>
   );
}

export default App;
