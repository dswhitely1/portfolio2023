import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { routes } from './routes';

const rootElement = () => {
  const element = document.createElement('div');
  element.setAttribute('dw-data-root', 'true');
  const bodyElement = document.getElementsByTagName('body')[0];
  bodyElement.appendChild(element);
  return element;
};

const root = createRoot(rootElement());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
