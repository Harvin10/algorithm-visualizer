import { createBrowserRouter } from 'react-router-dom'

import ParentPage from '../pages';

// Pages
import ErrorPage from '../pages/error/Error';
import SortingPage from '../pages/sorting/Sorting';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ParentPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SortingPage />,
      },
      {
        path: 'sorting',
        element: <SortingPage />,
      },
      {
        path: 'pathfinding',
        element: <div>Coming Soon...</div>
      }
    ]
  },
]);