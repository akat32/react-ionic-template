  
import React, { Suspense } from 'react';
import RouteList from './RouteList';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import ErrorBoundary from './ErrorBoundary';


function AppRouter() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path=''>
            <>
              <Switch>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </>
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

export default AppRouter;