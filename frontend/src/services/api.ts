import axios from 'axios'
const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const useBackend = import.meta.env.VITE_USE_BACKEND === 'true'

const client = axios.create({
  baseURL: useBackend ? backendUrl : 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' }
})

export const api = {
  async listUsers(){ const {data} = await client.get('/users'); return data },
  async createUser(u:any){ const {data} = await client.post('/users', u); return data },
  async updateUser(id:number, u:any){ const {data} = await client.patch(`/users/${id}`, u); return data },
  async deleteUser(id:number){ await client.delete(`/users/${id}`) },

  async listPosts(){ const {data} = await client.get('/posts'); return data },
  async createPost(p:any){ const {data} = await client.post('/posts', p); return data },
  async updatePost(id:number, p:any){ const {data} = await client.patch(`/posts/${id}`, p); return data },
  async deletePost(id:number){ await client.delete(`/posts/${id}`) },
  async listUserPosts(userId:number){ const {data} = await client.get(useBackend?`/users/${userId}/posts`:'/posts', { params: useBackend?{}:{ userId } }); return data },
}
