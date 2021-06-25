const Hapi = require('@hapi/hapi');
const Inert = require('inert');

// const server = new Hapi.Server({ port: 4000 });
const server = Hapi.server({
    port: 4000,
    host: 'localhost'
});

const start = async () => {

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'public'
                }
            }
        }
    });

    await server.start();

    console.log('Listening on %s', server.info.uri);
};

start();