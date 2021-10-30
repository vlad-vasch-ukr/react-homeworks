import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Particimants from './pages/Participants/Participants';
import Competitions from './pages/Competitions/Competitions';
import RegisterCompetition from './pages/RegisterCompetition/RegisterCompetition';

export default function Routes() {
  return(
    <>
      <Switch>
        <Route path="/" exact component={ Competitions } />
        <Route path="/competition/:competitionId" component={ Particimants } />
        <Route path="/create" component={ RegisterCompetition } />
        {/* <Route path="/error" component={ErrorPage} />
        <Redirect to="/error" /> */}
      </Switch>
    </>
  );
}