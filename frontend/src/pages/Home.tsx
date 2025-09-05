import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div className="card">
      <h1>Web Dev Assignment</h1>
      <p>Choose a list to manage:</p>
      <div style={{display:'flex', gap:12}}>
        <Link className="btn" to="/users">Users</Link>
        <Link className="btn" to="/posts">Posts</Link>
      </div>
      <p className="muted" style={{marginTop:12}}>Frontend: React + Vite + TS | Backend: NestJS</p>
    </div>
  )
}
