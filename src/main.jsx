import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Cards from './components/Cards/Cards.jsx';
import CardDetails from './components/CardDetails/CardDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'LogIn',
        element: <Login></Login>
      },
      {
        path: 'Register',
        element: <Register></Register>
      },
      {
        path: 'Services',
        element: <Services></Services>,
      },
      {
        path: 'Cards',
        element: <Cards></Cards>
      },
      {
        path: 'Card',
        element: <CardDetails></CardDetails>
      },
      {
        path: 'Services/Card/:id',
        element: <CardDetails></CardDetails>
      },
      {
        path: 'AboutUs',
        element: <About></About>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
