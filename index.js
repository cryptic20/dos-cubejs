const CubejsServer = require('@cubejs-backend/server');

const server = new CubejsServer();
const jwt = require('jsonwebtoken');
const CUBE_API_SECRET= `${process.env.CUBEJS_API_SECRET}`;
const cubejsToken = jwt.sign({}, CUBE_API_SECRET, { expiresIn: '30d' });
console.log(cubejsToken)


server.listen().then(({ version, port }) => {
  console.log(`🚀 Cube.js server (${version}) is listening on ${port}`);
}).catch(e => {
  console.error('Fatal error during server start: ');
  console.error(e.stack || e);
});
