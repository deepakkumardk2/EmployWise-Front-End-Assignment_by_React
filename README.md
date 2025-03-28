# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start

# EmployWise Assignment

## Overview
This project is a **React-based user management application** that interacts with the [Reqres API](https://reqres.in/) to provide authentication, user listing, and user management features (edit, delete, and update). The project follows a three-level complexity model.

## Features
### Level 1: Authentication Screen
- Allows users to log in using credentials.
- API Endpoint: `POST /api/login` (email and password in the body).
- Sample Credentials:
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
- On successful login, stores the token and navigates to the **Users List** page.

### Level 2: List All Users
- Displays a **paginated list** of users retrieved from the API.
- API Endpoint: `GET /api/users?page=1`
- Shows user details: **first name, last name, and avatar** in a structured format (table or cards).
- Supports **pagination** or **lazy loading** for fetching more users.

### Level 3: Edit, Delete, and Update Users
- **Edit:**
  - Clicking "Edit" opens a form with pre-filled user data.
  - Users can update their **first name, last name, and email**.
  - API Endpoint: `PUT /api/users/{id}`
- **Delete:**
  - Clicking "Delete" removes a user from the list.
  - API Endpoint: `DELETE /api/users/{id}`
- Displays appropriate success or error messages.

## Tech Stack
- **Frontend:** React.js
- **State Management:** Context API / Redux (Optional)
- **API Calls:** Axios / Fetch API
- **Styling:** Tailwind CSS / Bootstrap / Material-UI / Custom CSS
- **Routing:** React Router (if implemented)

## Setup and Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (>= 14.x)
- **npm** or **yarn**

### Installation Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/employwise-assignment.git
   cd employwise-assignment
   ```
2. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
3. **Run the development server:**
   ```sh
   npm start  # or yarn start
   ```
4. **Open the app in your browser:**
   - Default: `http://localhost:3000`

## Project Structure
```
EmployWise-Assignment/
│── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Login, Users List, Edit User pages
│   ├── services/        # API handling (Axios or Fetch wrapper)
│   ├── context/         # Context API (if used)
│   ├── redux/           # Redux store (if used)
│   ├── App.js           # Main application file
│   ├── index.js         # Entry point
│── public/
│── package.json
│── README.md
```

## Features Implemented
✔️ Authentication with token storage
✔️ Paginated user list
✔️ Edit & delete user functionality
✔️ Error handling & validation
✔️ Responsive design
✔️ Clean and modular code

## Additional Enhancements (Bonus Points)
- ✅ **Client-side search & filtering** (if implemented)
- ✅ **React Router for navigation**
- ✅ **Deployed on a free hosting service** (Heroku, Vercel, Netlify, etc.)
  - **Live Demo:** [Deployed Link](#)

## Assumptions & Considerations
- Users must log in to access the user list.
- The API does not persist user updates or deletions (as Reqres is a mock API).
- Error handling includes invalid login attempts, failed API requests, and validation errors.

## Contribution
Feel free to fork this repository and submit pull requests for improvements!

## License
This project is licensed under the MIT License.

