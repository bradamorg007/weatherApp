import React from 'react';
import css from './App.module.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsTable from '../NewsTable/NewsTable';
import WeatherTable from '../WeatherTable/WeatherTable';
import PageNotFound from '../Errors/PageNotFound/PageNotFound';


function App() {
  return (
    <Router>
      <div className={css.App} >
        <Header />
        <Body>
          <Switch>
            <Route exact path="/">
              <NewsTable />
            </Route>
            <Route path="/weather">
              <WeatherTable />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
