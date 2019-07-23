'use strict';

class MicroserviceRouteData {
    constructor(routePrefix, host, port) {
        this.routePrefix = routePrefix;
        this.host = host;
        this.port = port;
    }
}

const routes = [
    { 
        prefix: 'users',
        host: 'localhost',
        port: '8081'
    }
    // new MicroserviceRouteData('users', 'localhost', '8081'),
    //new MicroserviceRouteData('books', 'localhost', '8082')
]


module.exports = routes;