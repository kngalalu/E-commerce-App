
# E-commerce App

## 📝 Overview
Welcome to the E-commerce App! This is a full-stack application designed to make online shopping a breeze. It's built with:

- **Frontend**: React.js using modern hooks (`useState`, `useEffect`, `useContext`)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)

The app lets users browse products, manage a shopping cart, sign up/sign in, and process orders.

## ✨ Features
- **User Authentication**: Register, log in, and log out securely
- **Product Catalog**: Browse products by categories
- **Shopping Cart**: Add/remove items and update quantities
- **Responsive Design**: Looks great on both mobile and desktop
- **State Management**: Context API for global state handling

## 🛠️ Prerequisites
Before you get started, make sure you have these installed:

- Node.js (v14 or higher)
- npm (which comes with Node.js)
- PostgreSQL (v12 or higher)
- Git (for version control)

## 🚀 Installation & Setup

### 1. Clone the Repository
First, let's grab the code:
```bash
git clone git@github.com:kngalalu/E-commerce-App.git
cd ecommerce-app
```

### 2. Set Up the Backend
Head into the `server` folder and install dependencies:
```bash
cd server
npm install
```

Now, create a `.env` file in the `server` folder and add the following (make sure to fill in your database password and secret key):
```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=ecommerce
DB_PASSWORD=yourpassword
DB_PORT=5432
JWT_SECRET=your_jwt_secret_key
```

### 3. Set Up the Database
Make sure PostgreSQL is running. Then, create your database and tables by running these commands:
```bash
psql -U postgres -f database/setup.sql
psql -U postgres -d ecommerce -f database/seed.sql
```

### 4. Set Up the Frontend
Switch over to the `client` folder and install the necessary frontend dependencies:
```bash
cd ../client
npm install
```

Also, create a `.env` file in the `client` folder and add:
```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

## 🏃 Running the Application

### 1. Start the Backend Server
In the `server` folder, run:
```bash
cd server
node index.js
```
This will run the backend on [http://localhost:5000](http://localhost:5000).

### 2. Start the Frontend Server
In the `client` folder, run:
```bash
cd client
npm start
```
The frontend will be available at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

Here's a quick look at how the project is organized:

```
ecommerce-app/
├── client/                  # React frontend
│   ├── public/              # Static files
│   ├── src/                 # React source code
│   │   ├── components/      # Reusable components
│   │   ├── context/         # Context providers
│   │   ├── pages/           # Page components
│   │   ├── styles/          # Styled components
│   │   ├── App.js           # Main App component
│   │   └── index.js         # Entry point
│   └── package.json         # Frontend dependencies
│
├── server/                  # Node.js backend
│   ├── routes/              # API routes
│   ├── db.js                # Database connection
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
│
├── database/                # Database scripts
│   ├── setup.sql            # Database schema
│   └── seed.sql             # Sample data
│
└── README.md                # You're looking at it now!
```

## 🔧 Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running.
- Double-check your `.env` credentials to make sure they match your PostgreSQL setup.
- Verify the `ecommerce` database exists.

### React Issues
- If you're seeing errors in the React app, try clearing your `node_modules` and reinstalling:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### Port Conflicts
- If the default ports (5000 for backend and 3000 for frontend) are already in use, you can change the port numbers in `server/index.js` or `client/package.json`.
