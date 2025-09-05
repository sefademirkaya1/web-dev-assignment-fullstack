import { useState, useEffect } from 'react'
import type { User } from '../types'

export default function UserForm({ initial, onSubmit, onCancel }:{ initial?: Partial<User>, onSubmit:(u:Partial<User>)=>void, onCancel:()=>void }){
  const [form, setForm] = useState<Partial<User>>({ name:'', username:'', email:'' })
  useEffect(()=>{ if(initial) setForm(prev=>({ ...prev, ...initial })) }, [initial])
  return (
    <div className="card">
      <div className="row">
        <div><label>Name</label><input value={form.name||''} onChange={e=>setForm({...form, name:e.target.value})}/></div>
        <div><label>Username</label><input value={form.username||''} onChange={e=>setForm({...form, username:e.target.value})}/></div>
      </div>
      <div style={{marginTop:8}}><label>Email</label><input value={form.email||''} onChange={e=>setForm({...form, email:e.target.value})}/></div>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        <button className="btn" onClick={()=>onSubmit(form)}>Save</button>
        <button className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}
