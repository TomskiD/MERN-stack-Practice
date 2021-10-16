# MERN stack practice

## Technologies
* MongoDB
* Express
* React
* Node.js

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
4. Run application in `/client` and `/server`
   ```sh
   npm run start
   ```
   
To run test in `/server`
   ```sh
   npm run test
   ```

## Usage
The task of the application is to save the event to the database based on the data from the form.