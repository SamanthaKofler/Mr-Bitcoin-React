import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactApp } from './pages/ContactApp/ContactApp';
import { ContactDetails } from './pages/ContactDetails/ContactDetails';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { AppFooter } from './cmps/AppFooter/AppFooter';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactEdit } from './pages/ContactEdit/ContactEdit';
import { SignupPage } from './pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      <Router>
      <AppHeader />
        <main>
          <Switch>
            <Route component={ContactEdit} path="/contact/edit/:id?" />
            <Route component={ContactDetails} path="/contact/:id" />
            <Route component={ContactApp} path="/contact" />
            <Route component={StatisticPage} path="/statistic" />
            <Route component={SignupPage} path="/signup" />
            <Route component={HomePage} path="/"/>
          </Switch>
        </main>
      <AppFooter />
      </Router>
    </>
  );
}

export default App;
