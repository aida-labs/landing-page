const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
var path = require('path');
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000;
    
app.prepare()
.then(() => {
  const server = express()

  server.use(express.static(__dirname + '/static/docs/'));
  server.get('/docs',  function(req,res) {
    res.sendFile(path.join(__dirname + '/static/docs/docs.html'));
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})