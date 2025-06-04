import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AddNew from './pages/AddNew';

import RootLayout from './pages/RootLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: 'blog',
        Component: Blog,
      },
       {
        path: 'add-new',
        Component: AddNew,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
