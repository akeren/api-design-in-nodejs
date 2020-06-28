# What is API?

Companies like **[Github](https://github.com), [Facebook](https://facebook.com), [Netflix](https://netflix.com), [Google](https://google.com), [Twitter](https://twitter.com), [IBM](https://ibm.com), [Microsoft](https://microsoft.com)**, and lots more have given opportunities to developers and products across the globe to consume their data via the use of APIs, and the resultant effect has become a platform for them.

**API** (Application Programming Interface) is a piece of software that is used by another piece of software, in order to allow application to interact (exchange data) to each other via some define calls or requests that can be made, how to make them, the data format that should be used, the conventions to follow, and et al. **[Haldar](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9) (2016)**, describes **API** as an artist performing on stage, and its users are the audience.

The possibilities of APIs are really endless. Build once use everywhere in the universe!

## The RESTful Architecture

REST stands for Representational State Transfer, its core essential concept in any **RESTful API** is the **resource**. A resource is an object with a type, associated data, relationships to other resources, and a set of methods (verbs) that operate on it. A **URL** (Uniform Resource Locator) on the other hand is the path that a resource can be located with an associated bagpack of some actions that can be performed on it.

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
