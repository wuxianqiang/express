const http = require('http')
const url = require('url')
const pathRegexp = require('./pathRegexp')

function express() {
  const app = {}
  const routes = { 'all': [] };

  app.use = function (path, action) {
    const keys = []
    const regexp = pathRegexp(path, keys,{end:true})
    routes.all.push([
      { regexp, keys },
      action
    ]);
  };

  ['get', 'put', 'delete', 'post'].forEach(function (method) {
    routes[method] = [];
    app[method] = function (path, action) {
      const keys = []
      const regexp = pathRegexp(path, keys, {end:true})
      routes[method].push([
        { regexp, keys },
        action
      ]);
    };
  });

  const match = function (pathname, routes, req, res) {
    for (var i = 0; i < routes.length; i++) {
      let route = routes[i];
      let reg = route[0].regexp;
      let keys = route[0].keys;
      let matched = reg.exec(pathname);
      if (matched) {
        let params = {};
        for (let i = 0, l = keys.length; i < l; i++) {
          let value = matched[i + 1];
          if (value) {
            params[keys[i]] = value;
          }
        }
        req.params = params;
        let action = route[1];
        action(req, res);
        return true;
      }
    }
    return false;
  };


  function handle(req, res) {
    let {pathname, query} = url.parse(req.url, true);
    req.query = query
    let method = req.method.toLowerCase();
    if (routes.hasOwnProperty(method)) {
      if (match(pathname, routes[method], req, res)) {
        return;
      } else {
        if (match(pathname, routes.all, req, res)) {
          return;
        }
      }
    } else {
      if (match(pathname, routes.all, req, res)) {
        return;
      }
    }
    handle404(req, res);
  }

  function handle404 (req, res) {
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
