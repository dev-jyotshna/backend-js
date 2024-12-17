# Backend Notes
## Roadmap
- 2 Major components
1. Programming Language : Java, JS, PHP, golang, c++ => on a framework like react, angular and libraries like express(for routing, makes server), mongoose(for database) packages
2. Database : Mongo, MySQL, Postgress, sqlite => ORM, ODM like prisma, mongus

- Backend: Store input or take data from the database and show it on website.
![alt text](<Screenshot 2024-12-17 170222.png>)

- JavaScript based Backend
- backened deals with data (username, password, filename), file (image, pdf, videos), third-party (api)
- JS runtime : nodejs, deno, bun
- file structure: 
    - package.json, 
    - .env, 
    - Readme.md, 
    - .git
    - src (dir)
        - index
            - db connects
        - app
            - config
            - cookie
            - urlencode
        - constants :: aeroplane seat example
            - enums
            - db-name

        - DB (dir)
        - Models (dir)  schema
        - Controllers (dir) functions/methods
        - Routes (dir)
        - Middlewares (dir)
        - Utils (dir)  mail, file uploads
        - More (dir)

## Deploy app with the backend
- Computer, mobile <--get & listen using express--> server
![alt text](<Screenshot 2024-12-17 183005.png>)

- To make a node application
```bash
npm init
```
- like create react app and vite , npm init is also a utility
- enter things that have been asked
- make index.js file
- test if index.js runs using command => node index.js in terminal
- make new script command in package.json
```json
"scripts": {
    "start": "node index.js"
  },
```
- when used the command `npm run start` on terminal node index.js also runs
- this script helps when starting on server
- to make backend we use express web framework is majorly used
```bash
npm install express
```
- changes in the dependenies in th package.json file can be seen
- add the follwing code to the index.json
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
- we can access methods in express using app variable
- virtual port 3000 is used to listen here
- app.get request is handled
- listen at home route '/' and if a request comes we give a callback function which has a request(req) and response(res) in which using response we send message "hello world"
- app.listen at port port and callback function
- update port = 3000 to port = 4000 , as we were getting error that the port 3000 was already being used
- run the app using `npm run start`, the app start listening to the port 4000
- Note : wehen we first used the cmd `npm run start` before using express the app automatically closed itself, but after using  express we have successfull made a SERVER that keeps on listening

```js
app.get('/twitter', (req, res) => {
    res.send('dev-jyotshna')
})
```
- add the above code into the index.js file after the previous get function
- since the server is made we can access it from our chrome browser by searching `localhost:4000` and `localhost:4000/twitter`
- after updating to add a get request response after adding a response for a page we need to stop th ecurrent job and restart the server using `npm run start`


- DEPLOY the application
- to deploy the production grade application we need to know few special variables
- use dotenv npm package to store sensitive data to not get it on the github using commmad `npm i dotenv`
- make a .env file
- use command `require('dotenv').config()` in the index.js file in th efirst line
- update port in app.listen function
```js
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
```