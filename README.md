# webpack-node-code-splitting-test

```bash
yarn
```

## server

```bash
webpack --config server.webpack.config.js
node dist-server/main.js
```

Result:

```
before
loaded
after
```

## client

```bash
webpack --config client.webpack.config.js --watch
http-server -c-1 ./dist-client/
```

```
before
loading
after
loaded
```
