# Contour (Fullstack Assignment)

## Setup

1. Clone the repository inside a project folder
```
$ git clone https://github.com/jacoblimzm/contour-project.git
```
2. Install all dependencies from root project folder with the command below. Then navigate inside `client` folder and run command **again**
```
$ npm install
```
3. Create an `.env` file in root project folder with variable `PORT`. 
```javascript
PORT=4000 // default
```  
4. Start backend server (root project folder)
```
$ node server.js
```
'server is now listening at port 4000' should appear in console.
6. Start frontend (navigate into `client` folder)
```
$ npm start
```

7. To run test (navigate into root folder)
```
$ npm run test
```

## How is the App Structured?
The currency app is built using the MERN stack. React is used for the front end with an Express.js based backend.

- **R:** React.js is a popular JavaScript based frontend framework that helps to simplify the building of websites by breaking down the logic and functionality into smaller components. This makes projects more reusable, modular, and dynamic. 
- **E:** Express is a framework that makes building a backend with Node.js extremely fast and flexible. Express cuts the time of setting up a local development server and allows the developer to get started on RESTful APIs with minimal fuss. 

#### Structure

Front End
- 2 Page Component
  - AccountHome (HomePage)
  - TransactionDetail
- 6 Modular Components
  - NavBar
  - AccountHeader
  - AccountOverview
  - TransactionListings
  - TransactionRow
  - TransactionInfo
- Page navigation with **react-router-dom**

Back End
- Static data available. Can be replaced with API calls to database or another APIs
- MVC structure. Controller built seperately
- Logic and API manipulation handled mainly at backend.
  - Transation sorted by dates from latest to oldest.
  - Custom endpoints to retrieve:
    - individual account information
    - individual transaction details

Packages Used
Backend:
- axios
- date-fns
- dotenv
- express
- jest
- supertest

Frontend:
- axios
- date-fns
- react-router-dom

## API Endpoints

Assuming you are running this project on your local machine with port 4000 (default). 

| SERVICE       | API ENDPOINT  | DESCRIPTION |
| ------------- | :-----------: | :----------: |
| `all`  | `http://localhost:4000/api/accounts` |  Returns a list of all the accounts currently available |
| `account`| `http://localhost:4000/api/accounts/:id`| Similar to `all`, and provides the user ability to decide which account to view using the account id. Replace `:id` with the id of the account.
| `transactions`      |   `http://localhost:4000/api/accounts/:id/transactions`    |     This endpoint allows the user to see a list of **all** the transactions from a specified account by using the account id. Replace `:id` with the id of the account. Response is sorted automatically by date of transaction. |
| `detail`      |   `http://localhost:4000/api/accounts/:id/transactions/:transactionId`    |     This endpoint allows the user to see details of a **specific** transaction from a specified account by using the account id. Replace `:id` with the id of the account. Replace `:transactionId` with the id of the transaction.  |

---