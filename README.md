
### Getting Started

1. Install [Docker](https://www.docker.com/) on your system.
2. Install [Docker Compose](http://docs.docker.com/compose/) on your system.

### Online Demo
Please visit [online demo](http://52.197.230.20/)

### Development
1. Clone the repo
2. Run the command below in project directory
````
$ docker-compose -f docker-compose-dev.yml up
````
The command will:
* build the container for a express app as API server
* build the container for the Nginx server

### Testing
````
$ cd nodeapp
$ npm run test
````

### Deployment
````
$ docker-compose up -d
````

