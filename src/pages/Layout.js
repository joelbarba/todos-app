import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ textAlign: 'left' }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
 
      <Outlet/>
    </div>
  )
};
export default Layout;