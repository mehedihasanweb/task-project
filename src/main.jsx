import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Main from './Components/Main.jsx'
import Details from './Components/Details.jsx'
import FormData from './Components/FormData.jsx'
import MovieForm from './Components/MovieForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'details/:id',
        element: <Details />,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: 'movieForm/:id',
        element: <MovieForm />,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
