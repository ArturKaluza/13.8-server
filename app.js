const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request', function(request, response){
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', 'utf-8', function(err, data){
      if (err) throw err;
      response.write(data);
      response.end();
    })
  } else if (request.method === 'GET' && request.url === '/about') {
    fs.readFile('./about.html', 'utf-8', function(err, data){
      if (err) throw err;
      response.write(data);
      response.end();
    })
  } else {
    response.setHeader('Content-Type', 'image/jpeg');
    fs.readFile('./error-404.png', function(err, data){
      if (err) throw err;
      response.end(data);
    })
  }
})


server.listen(9000);