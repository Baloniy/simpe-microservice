import * as express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';
import MicroservicesRoutes from './configuration/microservicesRoutes';
import * as proxy from 'express-http-proxy';

let app = express();
app.use(BodyParser.json());
app.use(cors());

// get routes config and data
let microservicesRoutesConf = new MicroservicesRoutes();
let routesData = microservicesRoutesConf.getRoutes();

const isMultipartRequest = function(req) {
  let contentTypeHeader = req.headers['content-type'];
  return contentTypeHeader && contentTypeHeader.indexOf('multipart') > -1;
};

const proxyMiddleware = function(routeData) {
  return function(req, res, next) {
    const timeout = 120000;
    let reqAsBuffer = false;
    let reqBodyEncoding = true;
    let parseReqBody = true;
    if (isMultipartRequest(req)) {
      reqAsBuffer = true;
      reqBodyEncoding = null;
      parseReqBody = false;
    }
    return proxy(`${routeData.host}:${routeData.port}`, {
      reqAsBuffer,
      reqBodyEncoding,
      parseReqBody,
      timeout: timeout,
      proxyReqPathResolver: (req, res) => {
        let target = req.url.replace(`/${routeData.routePrefix}`, '');
        console.log(`forwarding request to: ${target}`);
        return target;
      }
    })(req, res, next);
  };
};

for (var i = 0; i < routesData.length; i++) {
  let routeData = routesData[i];

  app.use(`/${routeData.routePrefix}`, proxyMiddleware(routeData));
}

app.listen(1231);
console.log(`proxy listening to port: ${1231}`);
