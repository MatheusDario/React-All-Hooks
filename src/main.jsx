import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './templates/App/index.jsx';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { About } from './templates/About/index.jsx';
import { Menu } from './components/Menu/index.jsx';
import { Redirect } from './components/Redirect/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>,
);
