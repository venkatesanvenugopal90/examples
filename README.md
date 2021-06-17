# Person - Address Management Application (SpringBoot, Hibernate, HSQLDB, AngularJS)

## What is it?
Small end to end application to interact with.

## Features
1. Lists person
![list_person](https://user-images.githubusercontent.com/86027537/122427618-2bf6dd00-cf89-11eb-902a-6fb67bdb9703.PNG)
2. Able to add new person
![add_person](https://user-images.githubusercontent.com/86027537/122427704-3e711680-cf89-11eb-8ded-f1bdda3c8e33.PNG)
3. Able to edit an existing person
4. Able to link existing address to a person
5. Able to delete an existing person
6. Lists address
![list_address](https://user-images.githubusercontent.com/86027537/122427646-331deb00-cf89-11eb-8123-c072a67b573b.PNG)
7. Able to add new address
![add_address](https://user-images.githubusercontent.com/86027537/122427800-4fba2300-cf89-11eb-8da9-3e7a6c7ee9a8.PNG)
8. Able to edit an existing address
9. Able to delete an existing address (Can not delete if it is linked to an existing person)

## Design

### Architecture
TODO

### Technologies
* Frontend - AngularJS
* Backend - SpringBoot RESTful
* ORM - Hibernate
* DB - HSQLDB

### ER-diagram
TODO

## Running application in development environment

### Pre-requisites
1. Java 1.8 installed and required java environment variables are set to run java applications
2. Maven is installed and required maven environment variables are set to run maven commands
3. Git is required if cloning the repository
4. Install nodejs and npm if not already. Refer https://angular.io/guide/setup-local#prerequisites
5. Clone or download repository https://github.com/venkatesanvenugopal90/examples.git

### Start backend
1. Open a shell prompt
2. Go to `cd backend` under repository and run `mvn clean install`
3. Run `java -jar target/backend-*.war`
Note : This would start the backend sprintboot application and leave this prompt as it is and open new shell prompt to start UI

### Start UI
1. Go to `cd ui` under repository directory
2. Install angular cli if not already. Refer https://angular.io/guide/setup-local#install-the-angular-cli
3. Run `ng serve --open`. Refer https://angular.io/guide/setup-local#run-the-application
Note: This would start the UI application and leave this prompt as it is. This will open http://localhost:4200/ on your default browser
4. Anytime when UI application is running, Open any web browser (Recommended Chrome/Firefox) and go to http://localhost:4200/ to see application

## Notes/TODO
1. Unit/Integration tests are not written for both ui & backend code
2. Exception handling is not in place for both ui & backend code
3. Advanced validations not in place for both ui and backend code
4. User friendly messages or popup on UI not in place
5. Java/UI documentations not in place
6. Need to document production way of deploying the application
7. Add person/address by uploading XML/JSON not in place

