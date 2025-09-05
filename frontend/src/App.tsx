import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'

export default function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/" className="btn">🏠 Home</Link>
        <NavLink to="/users" className="btn">👤 Users</NavLink>
        <NavLink to="/posts" className="btn">📝 Posts</NavLink>
       </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}
