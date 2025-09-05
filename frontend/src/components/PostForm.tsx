import { useState, useEffect } from 'react'
import type { Post, User } from '../types'

export default function PostForm({ users, initial, onSubmit, onCancel }:{ users:User[], initial?: Partial<Post>, onSubmit:(p:Partial<Post>)=>void, onCancel:()=>void }){
  const [form, setForm] = useState<Partial<Post>>({ userId: users[0]?.id, title:'', body:'' })
  useEffect(()=>{ if(initial) setForm(prev=>({ ...prev, ...initial })) }, [initial])
  return (
    <div className="card">
      <div className="row">
        <div>
          <label>User</label>
          <select value={form.userId||users[0]?.id} onChange={e=>setForm({...form, userId:Number(e.target.value)})}>
            {users.map(u=><option key={u.id} value={u.id}>{u.name} (@{u.username})</option>)}
          </select>
        </div>
        <div>
          <label>Title</label>
          <input value={form.title||''} onChange={e=>setForm({...form, title:e.target.value})}/>
        </div>
      </div>
      <div style={{marginTop:8}}>
        <label>Body</label>
        <input value={form.body||''} onChange={e=>setForm({...form, body:e.target.value})}/>
      </div>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        <button className="btn" onClick={()=>onSubmit(form)}>Save</button>
        <button className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}
