import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import CourseDetails from './Component/CourseDetails/CourseDetails';
import EeeorPage from './Component/Error Page/EeeorPage';
import Faq from './Component/Faq/Faq';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Login from './Excees/Login/Login';
import Register from './Excees/Register/Register';
import Premium from './PrivateRoute/Premium';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://server-two-puce.vercel.app/courses')
        },
        {
          path: '/course/:id',
          element:<CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`https://server-two-puce.vercel.app/course/${params.id}`)
        },
        {
          path: '/premium/:id',
          element:<PrivateRoute><Premium></Premium></PrivateRoute>,
          loader: ({params}) => fetch(`https://server-two-puce.vercel.app/course/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        }
      ]
    },
    {
      path: '*',
      element: <EeeorPage></EeeorPage>
    }
  ])
  return (
      <div>
          <RouterProvider router={router}></RouterProvider>
      </div>
  );
};

export default App;
