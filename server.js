var restify = require('restify');

var server = restify.createServer({
  name: 'MyBlogServer'
});

require('./routes/index')(server);

server.listen(4000);
