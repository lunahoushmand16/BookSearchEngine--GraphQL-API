# BookSearchEngine – GraphQL API with Apollo Server

## Description

This is a full-stack MERN application that allows users to search for books using the Google Books API, sign up or log in, and save/delete books from their personal list. The RESTful API has been fully refactored to use GraphQL with Apollo Server, providing efficient and flexible data queries and mutations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lunahoushmand16/BookSearchEngine--GraphQL-API
   ```
2. Navigate to the project folder:
   ```sh
   cd BookSearchEngine--GraphQL-API 
   ```
3. Install dependencies:
    ```sh
   npm install
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Start the backend server:
   ```sh
   npm run watch
   ```
6. Start the frontend client:
   ```sh
   cd client
   npm run dev
   ```

## Usage

- Open your browser and navigate to: http://localhost:3000

- Use the Search for Books feature to query book data via the Google Books API

- Log in or create an account to save favorite books to your profile

- Access your saved books from the “Saved Books” page

- All user actions are managed via GraphQL queries and mutations

### Screenshots:

![SignUp page](./Assets/Sign-in%20page.png)
![Login page](./Assets/login%20page.png)
![Look for the save books/Delete](./Assets/Search%20for%20Book.png)

## Credits

- Created by **[Luna Houshmans](https://github.com/lunahoushmand16)**
- Technologies used: 
  - **[Apollo Server](https://www.apollo.io/)**
  - **[GraphQL](https://graphql.org/)**
  - **[Express.js](https://expressjs.com/)**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Mongoose](https://mongoosejs.com/)**
  - **[MongoDB Compass](https://www.mongodb.com/products/tools/compass)**
  - **[React.js](https://react.dev/)**
  - **[Vitejs](https://vite.dev/)**

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Badges

![GitHub repo size](https://img.shields.io/github/repo-size/lunahoushmand16/BookSearchEngine--GraphQL-API)
![GitHub contributors](https://img.shields.io/github/contributors/lunahoushmand16/BookSearchEngine--GraphQL-API)
![GitHub stars](https://img.shields.io/github/stars/lunahoushmand16/BookSearchEngine--GraphQL-API?style=social)

## Features

- Fully refactored MERN stack with GraphQL API

- User authentication with JWT

- Google Books API search

- Book saving and deletion per user profile

- Apollo Client integration on frontend

- GraphQL queries & mutations for all core actions

- Type-safe backend with modular structure

## How to Contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Add feature X'`
4. Push changes: `git push origin feature-name`
5. Open a pull request

## Tests
This project was manually tested through the following steps:

✅ User Signup with a new username, email, and password

✅ User Login with correct credentials

✅ Search books using the Google Books API

✅ Save books to the user’s account

✅ View and delete saved books from the account

✅ JWT authentication verified for secure routes

✅ API route error handling tested (invalid login, bad requests)


