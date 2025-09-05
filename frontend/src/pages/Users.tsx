import { useEffect, useMemo, useState } from 'react'
import { api } from '../services/api'
import type { User } from '../types'
import UserForm from '../components/UserForm'

export default function Users(){
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<User|null>(null)
  const [creating, setCreating] = useState(false)

  useEffect(()=>{ (async()=>{
    setLoading(true)
    const data = await api.listUsers()
    setUsers(data)
    setLoading(false)
  })() }, [])

  const onCreate = async (u: Partial<User>)=>{
    const created = await api.createUser(u)
    setUsers(prev=>[...prev, { id: created.id ?? Math.max(0, ...prev.map(p=>p.id))+1, name: u.name!, username: u.username!, email: u.email! }])
    setCreating(false)
  }

  const onUpdate = async (id:number, u: Partial<User>)=>{
    await api.updateUser(id, u)
    setUsers(prev=>prev.map(x=>x.id===id? { ...x, ...u }: x))
    setEditing(null)
  }

  const onDelete = async (id:number)=>{
    if(!confirm('Delete user #' + id + '?')) return
    await api.deleteUser(id)
    setUsers(prev=>prev.filter(x=>x.id!==id))
  }

  const table = useMemo(()=> (
    <table>
      <thead><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th></th></tr></thead>
      <tbody>
        {users.map(u=> (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>@{u.username}</td>
            <td>{u.email}</td>
            <td>
              <button className="btn" onClick={()=>setEditing(u)}>Edit</button>{' '}
              <button className="btn" onClick={()=>onDelete(u.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ), [users])

  return (
    <div>
      <h2>Users</h2>
      <div className="card">
        <button className="btn" onClick={()=>setCreating(true)}>➕ New User</button>
      </div>
      {creating && <UserForm onSubmit={onCreate} onCancel={()=>setCreating(false)} />}
      {editing && <UserForm initial={editing} onSubmit={(u)=>onUpdate(editing.id, u)} onCancel={()=>setEditing(null)} />}
      <div className="card">
        {loading? 'Loading...' : table}
      </div>
    </div>
  )
}
