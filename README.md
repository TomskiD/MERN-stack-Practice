# MERN stack practice

## Technologies
* MongoDB
* Express
* React
* Node.js
* Jest
* Cypress

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TomskiD/MERN-stack-Practice.git
   ```
2. Install NPM packages in `/client` and `/server`
   ```sh
   npm install
   ```
3. To connect to DB create `.env`
   ```js
   PORT = 5000
   DB_CONNECTION = mongodb+srv://test_database:2qG2dAgfjfHowpcN@rest.bpir1.mongodb.net/Rest?retryWrites=true&w=majority
   ```
4. First run application on `/server` then `/client` with command 
   ```sh
   npm run start
   ```
   
To run tests in backend `/server`
   ```sh
   npm run test
   ```
To run tests in frontend `/client`
   ```sh
   npm run test
   ```
To run E2E tests `/tests`
   ```sh
   npm run cypress:open
   ```

## Usage
The task of the application is to save the event to the database based on the data from the form.
