import React from 'react';
import css from './App.module.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className={css.App} >
        <Header />
        <Body>
          <Switch>
            <span className={css.Span}>Body</span>
          </Switch>
        </Body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
