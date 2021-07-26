const http = require('http')
const {
  readFileSync,
  readSync
} = require('fs');

//Get all Files

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url)
  //Home
  if (url === '/') {
    res.writeHead(200, {
      'content-type': 'text/HTML'
    })
    res.write(homePage)
    res.end();

  } else if (url === '/styles.css') {
    res.writeHead(200, {
      'content-type': 'text/css'
    })
    res.write(homeStyles)
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, {
      'content-type': 'image/svg+xml'
    })
    res.write(homeImage)
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, {
      'content-type': 'text/javascript'
    })
    res.write(homeLogic)
    res.end();
  }

  //about
  else if (url === '/about') {
    res.writeHead(200, {
      'content-type': 'text/HTML'
    })
    res.write(`<h1>About Page</h1>`)
    res.end();
  }
  //404
  else {
    res.writeHead(404, {
      'content-type': 'text/HTML'
    })
    res.write("Page Not Found");
    res.end();
  }
})

server.listen(5000)
//what is this 5000 value??
