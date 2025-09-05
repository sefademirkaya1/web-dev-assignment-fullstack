import { useEffect, useMemo, useState } from 'react'
import { api } from '../services/api'
import type { Post, User } from '../types'
import PostForm from '../components/PostForm'

export default function Posts(){
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Post|null>(null)
  const [creating, setCreating] = useState(false)
  const [filterUser, setFilterUser] = useState<number|''>('')

  useEffect(()=>{ (async()=>{
    setLoading(true)
    const [u, p] = await Promise.all([api.listUsers(), api.listPosts()])
    setUsers(u); setPosts(p); setLoading(false)
  })() }, [])

  const onCreate = async (p: Partial<Post>)=>{
    const created = await api.createPost(p)
    const id = created.id ?? Math.max(0, ...posts.map(x=>x.id))+1
    setPosts(prev=>[...prev, { id, userId: Number(p.userId), title: p.title||'', body: p.body }])
    setCreating(false)
  }
  const onUpdate = async (id:number, p: Partial<Post>)=>{
    await api.updatePost(id, p)
    setPosts(prev=>prev.map(x=>x.id===id? { ...x, ...p, userId: Number(p.userId ?? x.userId) }: x))
    setEditing(null)
  }
  const onDelete = async (id:number)=>{
    if(!confirm('Delete post #' + id + '?')) return
    await api.deletePost(id)
    setPosts(prev=>prev.filter(x=>x.id!==id))
  }

  const filtered = posts.filter(p=> filterUser==='' ? true : p.userId===Number(filterUser))

  const table = useMemo(()=> (
    <table>
      <thead><tr><th>ID</th><th>User</th><th>Title</th><th></th></tr></thead>
      <tbody>
        {filtered.map(p=> (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>#{p.userId} {users.find(u=>u.id===p.userId)?.name || ''}</td>
            <td>{p.title}</td>
            <td>
              <button className="btn" onClick={()=>setEditing(p)}>Edit</button>{' '}
              <button className="btn" onClick={()=>onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ), [filtered, users])

  return (
    <div>
      <h2>Posts</h2>
      <div className="card" style={{display:'flex', gap:12, alignItems:'center'}}>
        <button className="btn" onClick={()=>setCreating(true)}>➕ New Post</button>
        <div style={{marginLeft:'auto', display:'flex', gap:8, alignItems:'center'}}>
          <span className="muted">Filter by user:</span>
          <select value={filterUser} onChange={e=>setFilterUser(e.target.value===''? '' : Number(e.target.value))}>
            <option value="">All</option>
            {users.map(u=><option key={u.id} value={u.id}>{u.name} (@{u.username})</option>)}
          </select>
        </div>
      </div>
      {creating && <PostForm users={users} onSubmit={onCreate} onCancel={()=>setCreating(false)} />}
      {editing && <PostForm users={users} initial={editing} onSubmit={(p)=>onUpdate(editing.id, p)} onCancel={()=>setEditing(null)} />}
      <div className="card">
        {loading? 'Loading...' : table}
      </div>
    </div>
  )
}
