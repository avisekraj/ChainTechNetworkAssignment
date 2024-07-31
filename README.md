# React Account Management

This is a simple React application that allows users to create and manage accounts. It includes a login page, a registration page, and a page where users can view and edit their account information.

## Features

- User registration
- User login
- View and update account information
- Logout functionality
- Responsive design with React Bootstrap

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/react-account-management.git](https://github.com/avisekraj/ChainTechNetworkAssignment.git)
   cd ChainTechNetworkAssignment


2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
4. ```bash
   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Code Structure

- `src/App.js`: The main component that sets up routing and state management.
- `src/components/NavBar.js`: The navigation bar component.
- `src/components/LoginPage.js`: The login page component.
- `src/components/RegisterPage.js`: The registration page component.
- `src/components/AccountPage.js`: The account information page component.



### Explanation of Code

- **NavBar.js**: Navigation bar that shows different links based on whether the user is logged in or not.
- **LoginPage.js**: Form to log in. It checks the entered credentials against localStorage and updates the user state on successful login.
- **RegisterPage.js**: Form to register a new user. It saves the user's details in localStorage.
- **AccountPage.js**: Form to view and update account information. It includes multiple fields for detailed information.
- **App.js**: Main component that sets up routing and manages the user state. It includes the login and logout functionality.
- **index.js**: Entry point of the application that renders the App component.

### Additional Notes

- **Error Handling**: Simple error handling is implemented for login and registration. In a real application, you would implement more robust error handling, including server-side validation.
- **Styling**: Basic styling is done using React Bootstrap for a clean and responsive UI. Further customization can be added as needed.
- **Comments**: Comments are included to explain the code and its functionality.
