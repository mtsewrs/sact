import { append } from 'vary';
import { PLuginFunction } from './index';

interface Options {
  origin?: any;
  methods?: string;
  preflightContinue?: boolean;
  optionsSuccessStatus?: number;
  credentials?: boolean;
  exposedHeaders?: any;
  allowedHeaders?: any;
  maxAge?: any;
  preflight?: true;
  hideOptionsRoute?: true;
}

export const cors: PLuginFunction<Options> = (sact, opts) => {
  const {
    origin,
    credentials,
    exposedHeaders,
    allowedHeaders,
    methods,
    maxAge,
    preflightContinue,
    preflight,
  } = Object.assign(
    {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: false,
      exposedHeaders: null,
      allowedHeaders: null,
      maxAge: null,
      preflight: true,
      hideOptionsRoute: true,
    },
    opts
  );

  const isOriginFalsy = !origin;
  const isOriginString = typeof origin === 'string';
  const isOriginFunction = typeof origin === 'function';

  if (preflight === true) {
    sact.options('/*', (_, res) => {
      res.send();
    });
  }

  sact.use((req, reply) => {
    // Always set Vary header
    // https://github.com/rs/cors/issues/10
    vary(reply, 'Origin');

    if (isOriginFalsy) return;

    configureOrigin(req, reply, (err, origin) => {
      if (err !== null) return;
      if (origin === false) return;

      if (credentials) {
        reply.header('Access-Control-Allow-Credentials', 'true');
      }

      if (exposedHeaders !== null) {
        reply.header(
          'Access-Control-Expose-Headers',
          Array.isArray(exposedHeaders)
            ? exposedHeaders.join(', ')
            : exposedHeaders
        );
      }

      if (req.getMethod().toUpperCase() === 'OPTIONS' && preflight === true) {
        // preflight
        reply.header(
          'Access-Control-Allow-Methods',
          Array.isArray(methods) ? methods.join(', ') : methods
        );

        if (allowedHeaders === null) {
          vary(reply, 'Access-Control-Request-Headers');
          var reqAllowedHeaders = req.getHeader(
            'access-control-request-headers'
          );
          if (reqAllowedHeaders !== undefined) {
            reply.header('Access-Control-Allow-Headers', reqAllowedHeaders);
          }
        } else {
          reply.header(
            'Access-Control-Allow-Headers',
            Array.isArray(allowedHeaders)
              ? allowedHeaders.join(', ')
              : allowedHeaders
          );
        }

        if (maxAge !== null) {
          reply.header('Access-Control-Max-Age', String(maxAge));
        }

        if (preflightContinue) {
          return;
        }
      } else {
        return;
      }
    });
  });

  function configureOrigin(req, reply, callback) {
    var reqOrigin = req.getHeader('origin');
    if (isOriginFunction) {
      var result = origin.call(sact, reqOrigin, _onOrigin);
      if (result && typeof result.then === 'function') {
        result.then((res) => _onOrigin(null, res), callback);
      }
    } else {
      _configureOrigin(origin);
    }

    function _onOrigin(err, origin) {
      if (err !== null || origin === false) {
        return callback(err, origin);
      }

      _configureOrigin(origin);
    }

    function _configureOrigin(origin) {
      if (!origin || origin === '*') {
        // allow any origin
        reply.header('Access-Control-Allow-Origin', '*');
      } else if (isOriginString) {
        // fixed origin
        reply.header('Access-Control-Allow-Origin', origin);
      } else {
        // reflect origin
        const allowed = isOriginAllowed(reqOrigin, origin);
        reply.header(
          'Access-Control-Allow-Origin',
          allowed ? reqOrigin : 'nope'
        );
      }

      callback(null, origin);
    }
  }

  function isOriginAllowed(reqOrigin, origin) {
    if (Array.isArray(origin)) {
      for (var i = 0; i < origin.length; ++i) {
        if (isOriginAllowed(reqOrigin, origin[i])) {
          return true;
        }
      }
      return false;
    } else if (typeof origin === 'string') {
      return reqOrigin === origin;
    } else if (origin instanceof RegExp) {
      return origin.test(reqOrigin);
    } else {
      return !!origin;
    }
  }
};

// https://github.com/sact/sact-sensible/blob/master/lib/vary.js
function vary(reply, field) {
  var value = reply.getHeader('Vary') || '';
  var header = Array.isArray(value) ? value.join(', ') : String(value);

  // set new header
  if ((value = append(header, field))) {
    reply.header('Vary', value);
  }
}
