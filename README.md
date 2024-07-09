# Project Overview

This project manages customer-related actions using MongoDB and Express.js. It includes components for defining routes, handling data, and setting up the application environment.

## Components

### **customer.js (Backend)**

**Front-end:** Defines routes for various customer actions such as viewing, adding, editing, and deleting customers.

**Back-end:** Maps these routes to corresponding controller functions, facilitating communication between the client and the server for managing customer data.

### **Customer.js (Backend)**

Defines the schema for customer data, including fields like first name, last name, telephone, email, etc., enabling the back-end to interact with MongoDB to store and retrieve customer information.

### **index.js (Backend)**

**Front-end:** Sets up middleware for handling form data, method override for HTTP verbs, and sessions for user authentication.

**Back-end:** Initializes the Express application, connects to the database, configures views using EJS, and defines routes to manage user requests, ultimately starting the server to listen for incoming connections.

## Running the Project

To run the project locally, follow these steps:

1. Change the mongoDB string as address as per ur local machine 

2. Install dependencies:
```
  npm install
```
3. Run the app
```
 npm run server
```


Ensure MongoDB is running and configured correctly as per your setup.

## Contact Information

For any inquiries or support, please contact:
- Email: 125015166@sastra.ac.in

