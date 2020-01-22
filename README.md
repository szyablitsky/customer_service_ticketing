# Demo project

This is an example of my current coding abilities.

It's a customer service ticketing application where customer can ask for help
and customer service agent can reply to customer. Administrator can manage
everything.

The application is deployed at heroku https://customer-service.herokuapp.com.
You can register with any fictional email you want.

If you want to check administrative interface, or change the role of your user,
you can use `admin@cs` login and `admin` password. But please leave this admin
as admin ;), so everyone can try this.

Front-end is an SPA built with React, Redux and React Router.
Integration of back- and front-end via Webpack is provided by
[React-on-rails](https://github.com/shakacode/react_on_rails) gem.

Back-end is a Rails application used mainly as API endpoint.
Business logic is encapsulated in operations powered by
[Trailblazer](https://github.com/trailblazer/trailblazer) gem.

Code is tested with RSpec and Lab/Enzyme.

Site markup is adaptive. No CSS framework is used. All styles are developed
specially for this project.

## Authentication
API uses JWT (JSON Web Tokens) specification for authentication. API can be used not only by web-application, where it can use cookies to save session, but any external application which has no cookies capabilities (mobile for example).

Application interacting with API should first login with user email and password. API checks if the user provided correct credentials, and returns temporary JWT token and “refresh” token.

Application doesn’t store plain password and tokens in database for security reasons. Instead it stores digests generated by bcrypt library. Generating bcrypt digests is intentionally time(CPU)-demanding (to protect from brute force attacks), so we have to use JWT as lightweight and server-signed storage for credentials and authentication token on each API request.

JWTs can’t be revoked from client, but we can set reasonable short amount of time in which JWT is expired. Just before expiration client requests new JWT using “refresh” token, which is stored as bcrypt digest on server.
We can delete compromised “refresh” token. And after JWT expiration client will be forced to provide credentials (email and password) to regain access.


## Front-end Application
Front-end application built around centralised store using unidirectional data flow provided by Redux library. Centralized store contains the state of application and uses actions to modify state with reducers.

Current state of the application is represented on page by components which is rendered by React library. React components are logicless and only serve as the functional transformations of application state into HTML markup.

Application logic is provided by actions, which are called by components in response to user actions. Asynchronous actions are supported by redux-thunk library.
Actions are processed with reducers. Reducer is a function which modifies application state in response of action.
Modified application state used by React components to represent changes to user.

## Rails API (back-end)
API server is built using Ruby on Rails framework for routing, controllers, models and assets pipeline.

Models and controllers are logicless. Models only serve as data access layer. Controllers only translates http request into operations call.

Application logic is provided by operations. They are built using Trailblazer gem. It provides unified interface for validation of input parameters and response representation.

## Integration of back-end and front-end
The only reason I do not use Rails in strict API-mode is React-on-Rails gem. This gem provides infrastructure for using node modules and webpack transformations inside of Rails assets pipeline. It uses webpack to build client JavaScript file which contains React components and is referenced inside application.js file served by assets pipeline.

In real life I’d build front-end application independently and serve it from CDN. But this requires too much additional steps for simple evaluation project. One of the additional steps will be using rack-cors gem so application can be served from main domain and API from ‘api’ subdomain.
Also application can benefit from real-time updates which can be provided via ActionCable or third-party services.
