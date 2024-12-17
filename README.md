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
- Computer, mobile <--listen using express--> server
![alt text](<Screenshot 2024-12-17 183005.png>)

- To make a node application
```bash
npm init
```
- like create react app and vite , npm init is also a utility
- enter things that have been asked
- make index.js file
