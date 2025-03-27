import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  function goToPosts() {
    navigate('/about');
  }
  return (
    <div>
      <nav style={{ textAlign: 'left' }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <button onClick={goToPosts}>Go to About</button>
      </nav>
 
      <Outlet/>
    </div>
  )
};