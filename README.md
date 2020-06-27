# API Design in Node.JS, v1

Uncover and learn the fundamentals of Node.js and use Express to build a REST API that handles methods (verbs) to Create, Read, Update, and Delete resources from a **MongoDB** database.

## Instruction

Each topic has its own **branch**; all you need is to be switching into each branch to gain access to its resources. That can be done locally after you might have **cloned** the repository or directly via the online repository on github.

## Key facts about Node.js

- The idea of running JavaScript on the server is known as **Node.JS**
- Original author of Node.js - **Ryan Dahl**, who has also currently release another cutting edge technology known as **[Deno](https://deno.land)**.
- Node.js is an open-source JavaScript run-time and cross-platform built on Google Chrome's V8 JavaScript engine.
- Single-threaded, based on event driven, non-blocking **I/O** model
- Node.js uses **[NPM](https://npmjs.com)** packages for its development
- It has proven to be the best tool for building fast, highly scalable network, and data-intensive applications.

## Node.js Architecture behind the scenes (Node, V8, Libuv, and C++)

The underlying architecture of Node.js is made up of Node, JavaScript, V8, Libuv, and C++. The five features give a higher level of abstraction that make our lives easier as Node developers with a great flexibility.

1. **V8 Engine**
   - It enable Node.js to understand JavaScript codes that we write else it would had been impossible
   - It is responsible to convert Node.js codes to machine codes that the computer can actually understand and execute effectively
2. **Libuv**

   - It is an open-source library with a strong focus on asynchronous **I/O** (Input/Output)
   - This layer is what gives Node.js access to operating systems, file systems, Networking, and et al
   - It implement the most two essential features of Node.js which are the:

     - **Event Loop**
       - This is responsible for executing simple tasks like: **Callbacks**, **Network IO**, and et al
     - **Thread Pool**
       - Responsible for more heavy work like: **File access**, **compression**, and et al

**NB:** The V8 and Libuv are all written in **C++** while V8 also has in its library some JavaScript codes. That's to say Node.js is a language written in **JavaScript** and **C++**

## Use Node.js for:

1. **Data Streaming**

   - **[YouTube](https://www.youtube.com/)**
   - **[Netflix](https://www.netflix.com/)** (Redeveloped using Node.js), _et al_

2. **API with database behind**
   - Preferably **NoSQL** Databases
     - **MongoDB**
     - **Couchbase**
     - **Amazon DynamoDB**, _et al_
3. **Real-time chat application**
   - Facebook
   - Twitter
   - Whatsapp
   - Telegram and et al
4. **Server-side web apps. Below apps are redeveloped using Node.js**
   - Uber
   - PayPal
   - ebay
   - Linkedln
5. **Hardware programming**
   - Iot
   - AI

## Don't use Node.js for:

- Applications with heavy server-side processing (High **CPU** Intensive usage)

## What is this thing called Deno?

**[Deno](https://deno.land)** is a modern, simple, and secured for **JavaScript** and **TypeScript** runtime that is based on Google chrome's V8 JavaScript engine and the **Rust** programming language. It was still created by **Ryan Dahl**, original creator of **Node.js**, and is focused on productivity.

## Let's install Node.js

- Head unto **=> [Node.JS](https://nodejs.org)**
- Select the version that supports your OS platform. LTS (Long Term Support) versions are highly recommended; because they are stable.
- Download it and install. **NB:** Remember to read and accept the apt instruction at each stage.

## Testing if Node.js is installed correctly

- Launch your terminal or CLI (Command Line Interface) and type the command below:

```javascript
    node -v or node --version
```

<img src"./src/img/node_test.png">

## What are Streams?

Streams are used to process (**read** and **write**) data piece by piece (**chunks**), without completing the whole read or write operation, and therefore without keeping all the data in memory. e.g **YouTube**, **Netflix**, and et al.

This scientific concept is essential and perfect for handling large volume of data and efficient data processing in terms of **memory** and **time**

- **Memory**
  - No need to keep all the data in memory
- **Time**
  - We dont't have to wait until all the data is available

## Types of Streams in Node.js

1. **Readable streams**
   - These are streams for which we can read (consume) data e.g (http requests and fs read data)
2. **Writable Streams**
   - Streams to which we can write data e.g (http responses and fs write data)
3. **Duplex Streams**
   - These are streams that are both readable and writable e.g (net web socket)
4. **Transform Streams**
   - Duplex streams that transform data as it is written or read e.g (zlip Gzip creation)

## What is Express?

Express is a minimal node.js framework build on top of node.js that provides a higher level of abstraction.

- Express provides sustainable, optimal, and rebust set of features:
  - Complex routing
  - Easier handling of requests and responses
  - Middlewares
  - Server-side rendering
  - Rapid development of node.js apps
  - Makes it easier to organize our application into MVC architecture and et al

## What is API?

Companies like **[Github](https://github.com), [Facebook](https://facebook.com), [Netflix](https://netflix.com), [Google](https://google.com), [Twitter](https://twitter.com), [IBM](https://ibm.com), [Microsoft](https://microsoft.com)**, and lots more have given opportunity to developers and products across the globe to consume their data via the use of APIs, and the resultant effect has became a platform for them.

**API** (Application Programming Interface) is a piece of software that is used by another piece of software, in order to allow application to interact (exchange data) to each other via some define calls or requests that can be made, how to make them, the data format that should be used, the conventions to follow, and et al. **[Haldar](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9) (2016)**, describes **API** as an artist performing on stage, and its users are the audience.

## The RESTful Architecture

The core essential concept in any **RESTful API** is the **resource**. A resource is an object with a type, associated data, relationships to other resources, and a set of methods (verbs) that operate on it. A **URL** (Uniform Resource Locator) on the other hand is the path that a resource can be located with an associated bagpack of some actions that can be performed on it.

- The core fundalmental principles of a RESTful API are:
  - Separate APIs into logical resources
  - Expose structured, resource-based URLS
  - Use HTTP methods (verbs) extensively
  - Send the data as JSON (JavaScript Object Notation)
  - Be Stateless

## API Endpoints & Methods

Endpoints of any RESTful API should contain only **resources (nouns)** and use **HTTP methods (verbs)** for actions. Methods are set of actions to be performed on resources.

| HTTP METHOD | CRUD                  | RESPONSE STATUS CODE | ENDPOINT          | DESCRIPTION                                                       |
| ----------- | --------------------- | -------------------- | ----------------- | ----------------------------------------------------------------- |
| POST        | Create                | 201: Created         | /users            | Create a resource in Database                                     |
| GET         | Read                  | 200: Ok              | /users            | Return the list of all users                                      |
| PUT         | Update/Replace        | 200: Ok              | /users/2          | Update resource or create if it doesn't exist                     |
| PATCH       | Partial Update/Modify | 200: Ok              | /users/3          | Update part of a resource that already exist                      |
| DELETE      | Delete                | 204: No Content      | /users/4          | Delete an individual resource or its instance from a database     |
| GET         | Read                  | 200: Ok              | /users/2/posts    | Return the list of all the posts that belong to user with ID of 2 |
| DELETE      | Delete                | 204: No Content      | /users/5/posts/10 | Delete that post with ID of 10, that belongs to user with ID of 5 |

## HTTP Response Status codes categories

- 100 - 199 (Informational responses)
- 200 - 299 (Successful responses)
- 300 - 399 (Redirects)
- 400 - 499 (Client Errors) and
- 500 - 599 (Server Errors)

## Resources

- **[Best Node.js, Express, and MongoDB Bootcamp](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)**
- **[Node.JS](https://nodejs.org)**
- **[Express JS](https://expressjs.com/)**
- **[Node Package Manager](https://www.npmjs.com/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[HTTP Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)**
