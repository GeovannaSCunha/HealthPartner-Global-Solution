import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from './assets/styles/EstiloGlobal.jsx'

// 1- Configurando o Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';


const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Erro404/>,
  children: [
    {path: "/", element: <Home/>}
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
