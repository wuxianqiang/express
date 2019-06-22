const http = require('http')
const url = require('url')

function express() {
  const app = {}
  const routes = [];
  app.use = function (path, action) {
    routes.push([path, action])
  }

  function handle(req, res) {
    let pathname = url.parse(req.url).pathname;
    for (let i = 0; i < routes.length; i++) {
      var route = routes[i];
      if (pathname === route[0]) {
        let action = route[1];
        action(req, res);
        return;
      }
    }
    handle404(req, res);
  }

  function handle404(req, res) {
    res.end('404')
  }

  app.listen = function (...args) {
    const server = http.createServer((req, res) => {
      handle(req, res)
    })
    server.listen(...args)
  }
  
  return app
}

module.exports = express
