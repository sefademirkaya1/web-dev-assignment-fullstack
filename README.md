# Web Development Assignment (Frontend + Backend)

## Structure
```
/project-root
  /frontend  (React + Vite + TS)
  /backend   (NestJS + TypeScript)
```

## Phase 1 (Frontend only)
- Go to `/frontend`, run `npm install` and `npm run dev`.
- Default data source is JSONPlaceholder.

## Phase 2 (with Backend)
- In `/backend`, run `npm install` and `npm run start:dev` to start API on port 3000.
- In `/frontend`, create `.env` with `VITE_USE_BACKEND=true` and optional `VITE_API_URL=http://localhost:3000`.
- Start frontend with `npm run dev`.
