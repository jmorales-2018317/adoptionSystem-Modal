import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AnimalsPage } from './pages/AnimalsPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { UserPage } from './pages/UserPage';
import { AppointmentPage } from './pages/AppointmentPage';

export const AuthContext = createContext();

//SERVIR PARA CREAR EL ENRUTADOR Y TAMBIÉN PASARLE UN CONTEXTO AL ENRUTADOR (CONJUNTO DE RUTAS)
//SERIE DE DATOS O FUNCIONES QUE JUNTAS SON UN CONTEXTO.
export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
      name: '',
      username: '',
      role: ''
    })
    useEffect(()=> {
      let token = localStorage.getItem('token')
      if(token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
          path: '/',
          element: <App/>,
          errorElement: <NotFound/>,
          children: [
            {
              path: '/',
              element: <HomePage/>
            },
            {
              path: '/register',
              element: <RegisterPage/>
            },
            {
              path: '/login',
              element: <LoginPage></LoginPage>
            },
            {
              path: '/dashboard',
              element: loggedIn ? <DashboardPage/> : <LoginPage/>,
              children: [
                {
                  path: 'animals',
                  element: <AnimalsPage/>
                },
                {
                  path: 'users',
                  element: <UserPage/>
                },
                {
                  path: 'appointments',
                  element: <AppointmentPage/>
                }
              ]
            }
          ]
        }
      ])
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
      <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
