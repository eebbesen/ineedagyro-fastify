

module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => 'this is an example')
}
