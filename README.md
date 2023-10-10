# BE-Secure-User-Registration-and-Login with JSON Web Tokens and Access Control

## What you will do

In this extended exercise task, you will develop a Node.js application to implement secure user registration and login functionality. You will use the express-generator tool (without a view engine) to initialize the project. You will use MongoDB as database. Additionally, you will use JSON Web Tokens (JWT) for authentication and access control.

## Tasks - Old part
```Markdown
### Task 1: Initialize project

Use the express-generator tool to create a new express project without a view engine. Name the project "user-authentication-jwt". Be sure to use the `--no-view` option to dispense with a view engine.

### Task 2: Install dependencies

Navigate to the project directory and install the required dependencies. Make sure you are using the latest versions of express, mongoose, bcrypt and jsonwebtoken.

### Task 3: Connect MongoDB

Open the `app.js` file in the root directory of the project. Import mongoose into this file and connect to the MongoDB database. Check if the connection was established successfully.

### Task 4: Create user schema and model

Create a `user.schema.js` file and define the user schema in it with the required fields: Username, Email address and Password. Use mongoose for this.

Create another file `user.model.js` and import the user schema. Create the user model using the schema.

### Task 5: Implement registration routes

Create a POST route `/users/signup` that allows users to register. The route should get username, email address and password as request parameters. Implement validation of the input data and store the user in the database. Use bcrypt to hash the password before storing it in the database. Also create a JWT for the user and return it in the response.

### Task 6: Implement login routes

Create a POST route `/users/login` that will allow users to log in. The route should get username and password as request parameters. Check the credentials entered against the data stored in the database and return a success message if the credentials are correct, or an error message if they are incorrect. Also generate a JWT for the authenticated user and send it back in the response.

### Task 7: Token authentication with custom middleware

Create a custom middleware `authenticateToken` that checks the user's JWT and stores the user in the `req.user` property if the token is valid. Use the `jsonwebtoken` library to verify and decode the token.

### Task 8: Protecting routes with access control

Extend the `authenticateToken` middleware to also verify the roles of the user and control access to protected routes based on the roles. Implement a custom middleware `protectRoute` to protect routes that should only be accessible to specific user types.
```
## Tasks - New Part

### Task 9: Update and delete users

Extend the user model and routes to allow getting, updating and deleting of single users. Make sure that passwords are hashed before they are saved and that only certain user types are allowed to perform these actions.

## Notes

- Be sure to organize code into modules and follow best practices for code structuring.
- You can consult the official documentation of express-generator, express, mongoose, bcrypt, and jsonwebtoken for more information on usage and implementation.
- Use appropriate middleware to validate the request parameters and establish the database connection.
- Consider the security aspects of using JSON web tokens, especially the security of the secret used and the expiration date of the tokens.
- Implement access control carefully and check the user's roles before allowing certain actions.

Good luck implementing secure user registration and login functionality with JSON Web Tokens and access control in your Node.js application!
