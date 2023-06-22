const http = require ("http")
const data = require ('./Data')

 http.createServer(function(req,resp){
    resp.writeHead(200,{'content-type':'application-json'})
    resp.write(JSON.stringify(data))
    resp.end()
 }).listen(5000)
 hello