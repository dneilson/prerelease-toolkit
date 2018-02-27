import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import GoogleButton from './GoogleBtn';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import Header from './Header';

// const Header = () => <h2>HEADER</h2>;
// const Dashboard = () => <h2>DASHBOARD</h2>;
// const SurveyNew = () => <h2>SURVEY CREATE</h2>;
// const Landing = () => <h2>LANDING</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/survey" component={Dashboard} />
        <Route path="/survey/new" component={SurveyNew} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/" component={GoogleButton} />
        <Route path="/triage" component={Header} />
        <Route path="/triage/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
};

export default App;
