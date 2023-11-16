import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from './assets/styles/EstiloGlobal.jsx'

// 1- Configurando o Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Erro404 from './routes/Erro404.jsx';
import Login from './routes/Login.jsx';
import Home from './components/Home.jsx';
import Cadastra from './routes/Cadastro.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Erro404/>,
  children: [
    {path: "/", element: <Login/>},
    {path: "/Home", element: <Home/>},
    {path: "/Cadastro", element: <Cadastra/>}
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
