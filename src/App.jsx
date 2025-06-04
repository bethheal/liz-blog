import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
