import React, { FunctionComponentElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../Home';

export default function RouteComponent(): FunctionComponentElement<unknown> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" render={() => <div>NOT FOUND</div>} />
      </Switch>
    </BrowserRouter>
  );
}
