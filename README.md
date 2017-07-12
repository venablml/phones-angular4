# phones-angular4
This sample project consists of a simple express api with one endpoint: /phones and an Angular 4 application that displays a list of phones and allows you to select one to view the details. The Angular app uses ngrx - heavily influenced by Redux- and the Angular router for navigation. 

## Install dependencies for web application
After cloning the project, run the following commands to install your dependencies.
cd phones-web
npm install
ng build --prod

## Running docker-compose
The api and ui applications are configured to run together using docker-compose. The ui is deployed inside of an nginx container. To run it, just run the following command in the root directory:

docker-compose up

Open your browser to http://localhost:80 to test the app.
