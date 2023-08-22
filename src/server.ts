import Fastify from 'fastify';
import path from 'path';
import FastifyView from '@fastify/view';
import ejs from 'ejs';

const fastify = Fastify();

fastify.register(FastifyView, { engine: { ejs }, root: path.join(__dirname, "pages") });

fastify.get('/', (_, reply) => reply.view('index'));

fastify.get('/users/:id', (req, reply) => {
  reply.view('users', { id: (req.params as any).id });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`);
})