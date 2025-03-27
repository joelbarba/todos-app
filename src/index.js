import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, RouterProvider, Routes, Route, createBrowserRouter } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';
import PostsList from './pages/posts/PostsList';
import PostsList2, { postLoader } from './pages/posts/PostsList2';
import PostDetails from './pages/posts/PostDetails';


const router = createBrowserRouter([
  { path: '/', element: <Layout/>, children: [ // <- Layout Route
    { path: '/',       element: <Home/> },
    { path: '/posts', children: [
      { path: '/posts',      element: <PostsList/> },
      { path: '/posts/:id',  element: <PostDetails/> },
    ]},
    { path: '/todos',  element: <Todos/> },
    { path: '/about',  element: <About/> },
  ] },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>} />
//           <Route path="todos" element={<Todos/>} />
//           <Route path="posts" element={<PostsList/>} />
//           <Route path="about" element={<About/>} />
//           <Route path="*" element={<NoPage/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

