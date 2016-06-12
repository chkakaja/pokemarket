[![Stories in Ready](https://badge.waffle.io/chkakaja/vendr.png?label=ready&title=Ready)](https://waffle.io/chkakaja/vendr)
# PokeMarket


PokeMarket is your personal, local marketplace for Pokemon transactions with real-time communication and negotation.

## Table of Contents
1. [Usage](#Usage)
2. [Getting started](#Getting-Started)
  1. [Clone the latest version](#Installing-Dependencies)
  2. [Install Dependencies](#Installing-Dependencies)
  3. [Setup Environment Variables](#Environment-Variables)
  4. [Start the application](#Start-application)
3. [Technologies](#Technologies)
4. [Team](#Team)
5. [Contributing](#Contributing)

## Usage

Login:
![screen shot 2016-06-12 at 10 35 53](https://cloud.githubusercontent.com/assets/10008938/15992804/8d4fc34e-308a-11e6-9507-c8f285bb4b08.png)
Home:
![screen shot 2016-06-12 at 10 36 08](https://cloud.githubusercontent.com/assets/10008938/15992805/8fd71b80-308a-11e6-92fc-f36c0ae7e4f3.png)
Pokepage with Negotiation Chat:
![screen shot 2016-06-12 at 10 39 43](https://cloud.githubusercontent.com/assets/10008938/15992806/92b043a4-308a-11e6-826a-165f12829998.png)
Video negotation:
![screen shot 2016-06-12 at 10 41 04](https://cloud.githubusercontent.com/assets/10008938/15992812/998ad478-308a-11e6-89fa-0c8c4d18d22d.png)
Payment:
![screen shot 2016-06-12 at 10 41 48](https://cloud.githubusercontent.com/assets/10008938/15992807/9723df90-308a-11e6-93e4-6873c0b205df.png)

## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of Vendr on your local machine by running:

  ```sh
  $ git clone https://github.com/chkakaja/pokemarket
  $ cd pokemarket
  ```

#### 2. Install Dependencies
  From within the root directory run the following command to install all dependencies:

  ```sh
  $ npm install
  ```

#### 3. Setup Environment Variables

##### Server side setup

  1. Copy and save the  ``` example.env ``` file in the env folder as ``` development.env ```.
  2. Replace the port with your desired port and enter the login credentials for your MySQL server (make sure it is running)

##### Client side setup

  1. Create a free account on http://face.sightcorp.com/ and create a new application for a new App Key.
  2. Copy and save the  ``` client-config.example.js ``` file in the env folder as ``` client-config.js ```.
  3. Enter and save your Client ID and App Key in the ``` client-config.js ``` file.

#### 4. Run the application

  1. Create a build folder within client/build. From within the root directory run the following command to make sure Browserify builds the bundle file and rebuilds on every change with Watchify:

  ```sh
  $ npm run bundle
  ```

  2. In a new terminal window run the following command to start the application:

  ```sh
  $ npm start
  ```

  After that open in your browser the localhost with your chosen port, e.g. ``` http://localhost:4568/ ``` to access the application.

#### 5. Run tests

  Configure the environment variable `NODE_ENV` prior to running tests.

   ```sh
  $ export NODE_ENV=development
  $ npm test
  ```

  You may use `npm run test-client` or `np run test-server` to run front-end and back-end tests independently.

## Technologies

##### Front end:
- React
- Redux
- Webpack
- Babel

##### Back end:
- Node
- Express
- Bookshelf/Knex
- MySQL
- Passport

##### Deployment:
- Digital Ocean Droplet
- pm2: Production Process Manager

## Team
  - Product Owner:            Christian Haug
  - Scrum Master:             Jack Zhang
  - Development Team Members: Christian Haug, Jack Zhang, Kani Munidasa, Katherine Hao

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
