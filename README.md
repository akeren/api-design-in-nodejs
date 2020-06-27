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

![Check Node](/src/img/node_test.png)
