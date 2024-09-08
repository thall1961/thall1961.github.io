import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root'
import Cadre from './routes/cadre'
import Work from './routes/work'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: '/cadre',
    element: <Cadre />
  },
  {
    path: '/work',
    element: <Work />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
