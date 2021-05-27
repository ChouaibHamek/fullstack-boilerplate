import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppMain from './app_main';

export default function App() {
  return (
    <div className="app" style={{ height: '100%' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AppMain} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
