# Event-Management-System

The main aim to develop this project is to provide details of the event, event services, event theme etc. Admin can manage all the college event, event services, event theme, event programmes etc

### Technologies Used

Event-Management-System uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [VS Code] - awesome text-editor for web development.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [MongoDB] - noSQL database

### Requirements

* [Node + npm](https://nodejs.org/)
* [Angular CLI](https://cli.angular.io/) v6+
* [Auth0 account](https://auth0.com) with [application](https://manage.auth0.com/#/applications)
* [mLab](https://mlab.com) MongoDB database

## Install

Clone this repository, then run:

```
$ npm install
```

## Setup

* Add your Auth0 and MongoDB credentials and remove `.SAMPLE` extension: `server/config.js.SAMPLE`
* Add your Auth0 credentials and remove `.SAMPLE` extension: `src/app/auth/auth.config.ts.SAMPLE`

## Development server

```bash
$ npm run dev
```

App available at `http://localhost:4200`.

Server available at `http://localhost:8083/api`.

## Build (local)

```
$ ng build --prod // client
$ node server // server
```

App and server both available on `http://localhost:8083`.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [VS Code]: <https://code.visualstudio.com/>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [MongoDB]: <https://www.mongodb.com/>
   


