# ph-l2-b7-A2
# Assignment 2 - Issue Tracker API

A backend REST API built with Node.js, Express, TypeScript, and PostgreSQL.  
This project is deployed on Vercel.

---

##  Live API

Base URL:
https://assignment-2-developerpranroys-projects.vercel.app

---

##  Tech Stack

- Node.js (LTS)
- TypeScript
- Express.js
- PostgreSQL (pg driver)
- bcrypt (password hashing)
- jsonwebtoken (JWT authentication)
- Raw SQL (no ORM)

---

##  User Roles

### contributor
- Register & login
- Create issues
- View all issues
- Update own issue (if open)

### maintainer
- All contributor permissions
- Update any issue
- Delete issue
- Manage workflow status

---

##  Authentication

JWT-based authentication system.

### Flow:
1. User login/register
2. Server returns JWT token
3. Client sends token in header:

---

##  API Endpoints

###  Auth

#### Register
POST /api/auth/signup


#### Login

POST /api/auth/login


---

###  Issues

#### Create Issue

POST /api/issues


#### Get All Issues

GET /api/issues?sort=newest


#### Get Single Issue

GET /api/issues/:id


#### Update Issue

PATCH /api/issues/:id

#### Delete Issue

DELETE /api/issues/:id


---

##  Deployment

Project deployed on Vercel:

https://assignment-2-developerpranroys-projects.vercel.app

---

##  Testing Tools

- Postman
- Browser (for GET routes)

---

##  Project Rules Followed

- Modular architecture used
- Raw SQL only (no ORM / query builder)
- JWT authentication implemented
- Role-based authorization enforced
- Passwords hashed using bcrypt
- Proper REST API structure followed

---

##  Author

Pran Kumar Roy