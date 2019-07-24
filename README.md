### Simlpe microservice

#### Installation ####

* type `git clone https://github.com/Baloniy/simpe-microservice.git projectname` to clone the repository
* type `cd projectname`

#### Run without docker ####

You need run 3 servers. Server for API Gateway, users-srvice, books-service. Also you need install mongodb and create two databases.
* type `cd api-gateway`
* type `npm install`
* type `npm run dev`
* Open new tab in terminal
* Go to the users-service folder
* type `npm install`
* type `npm run dev`
* Open new tab in terminal
* Go to the books-service folder
* type `npm install`
* type `npm run dev`
* Open postman and make request GET http://localhost:8080/users

#### Run with docker ####

You need run 4 containers: api-gateway, users-service, books-service, mongodb.

* Install Docker CE
* type `cd api-gateway`
* type `docker build -t <your username>/api-gateway-app .`
* type `docker images`
* type `docker run -p 8080:8080 -d <your username>/api-gateway-app`

These points should also be made for others folders

#### Container for mongoDB ####

* type `docker pull mongo`
* type `docker run -d -p 27017-27019:27017-27019 --name mongodb mongo`
* type `docker exec -it mongodb bash`
* type `mongo`
* Create 2 databases

### Technologies ###

* Language: Node.js (javaScript)
* DB: Mongodb
* Data Access: mongoose
* ExpressJS
* Docker