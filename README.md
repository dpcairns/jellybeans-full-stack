## Make a full-stack 'list of things' -- list of jellybeans

## Get jellybeans into the database
1) `npx create-alchemy-sql-be jellybeans` to start the project 
1) Spin up a database in the cloud
    - `heroku create`
    - `npm run setup-heroku`
    - copy `DATABASE_URL` into `.env`
1) Validation step: load samp animal data with `npm run setup-db` to see if everything's working
1) Validation step: `npm run start:watch` and try to hit the `/animals` endpoint
1) make a hard-coded list of jellybeans: `/data/jellybeans.js`
1) update my `/data/` scripts to seed the data and fit the jellybean model
    - `create-tables`
    - `drop-tables`
    - `load-seed-data`
1) `npm run setup-db`
1) Open the db in pgAdmin and look at our data

### Validation: do a SQL query in PGAdmin

## Get that jellybean data from the from the database to the node server
1) Write a `GET /jellybeans` route for jellybeans.
1) Write a SQL select query to get all the jellybeans from the database
1) Log out our jellybeans to the console and check the terminal

### Validation: console.log the jellybeans in the server terminal

## Get the node server jellybeans to the front end
1) Spin up a react app `npx init react-app jellybeans-front-end`
1) `npm start` and make a change to App.js to make sure it's working
1) Delete App.js and `rcc + tab` to get a fresh App class component. Rendert `hello` to the screen as validation.
1) `npm i superagent` then import `superagent` to fetch back-end data from the front end
    - in React, there is a special place where fetches go: `componentDidMount`
1) Console.log our data to see it in the chorome inspect console

### Valdation: console.log the jellybeans in chrome


=========================
=========================

### Welcome to `react` land: props, state, mount, render

## Render those items as a list
1) We have the data in `componentDidMount`. We want that data to be injected into `this.state` because when `this.state` changes, the view automatically syncs/updates. 
    - we need initial state `state = { jellybeans: [] }`
    - `this.setState({ jellybeans: ourData })`
1) In the `render` method, make a list of `divs` using `map`
    - `{ this.state.jellybeans.map(jellybean => <div>
        <p>{jellybean.color}</p>
        <p>{jellybean.flavor}</p>
        <p>{jellybean.is_favorite}</p>
    </div>)}`

### Validation look at the react site  in chrome