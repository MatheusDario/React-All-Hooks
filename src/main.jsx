import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './templates/App/index.jsx';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { About } from './templates/About/index.jsx';
import { Menu } from './components/Menu/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>,
);
