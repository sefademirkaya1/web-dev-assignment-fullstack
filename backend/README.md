# Backend (NestJS)

## Run
- `npm install`
- `npm run start:dev` (http://localhost:3000)

## Endpoints
- `GET /users` / `GET /users/:id` / `POST /users` / `PATCH /users/:id` / `DELETE /users/:id`
- `GET /posts` / `GET /posts/:id` / `POST /posts` / `PATCH /posts/:id` / `DELETE /posts/:id`
- `GET /users/:id/posts` — Posts for a user
- `POST /users/:id/posts` — Create a post for a user

Data is in-memory and resets on restart.
