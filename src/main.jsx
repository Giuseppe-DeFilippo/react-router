import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChiSiamoComponent from './components/ChiSiamoComponent.jsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: "/home",
//     element: <HomePageComponent></HomePageComponent>,
//   },

// ]
// )



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
