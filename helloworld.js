//hapijs app
'use strict';

const Hapi = require('hapi');

// Create a server with

const server = Hapi.server({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/{name}', 
    handler: function (request, reply) {

        return  ('hello world welcomes '+request.params.name);
    }
});

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();