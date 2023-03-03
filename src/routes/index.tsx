import { createBrowserRouter } from 'react-router-dom';
import { Navigation } from '../views/Navigation/Navigation';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
  },
]);
