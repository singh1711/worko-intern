# Worko Backend API

## Overview
This project is a Node.js backend service for the Worko platform, helping job seekers to request referrals and services like resume review, interview handholding, career guidance, and mock interviews.

## Requirements
- Node.js
- MongoDB

## Setup

1. Clone the repository
   ```bash
   git clone <repo_url>
   cd worko-backend
   
2. Install dependencies
    npm install
3. Create a .env file and add your MongoDB URI and port
    DB_URI=mongodb://localhost:27017/worko
    PORT=3000
4. Run the server
    npm start
5. Run tests
    npm test
   
**API Endpoints**
    GET /api/worko/user - List users
    GET /api/worko/user/:userId - Get user details
    POST /api/worko/user - Create user
    PUT /api/worko/user/:userId - Update user
    PATCH /api/worko/user/:userId - Partially update user
    DELETE /api/worko/user/:userId - Soft delete user
