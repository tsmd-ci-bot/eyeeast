
const http = require('http')
const fileSystem = require('fs')

const server = http.createServer(function(req, res){
	fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
			res.writeHead(500, {'Content-Type': 'text/plain'})
			res.end('Error')
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.write(fileContent)
			res.end()
		}
	})
})

server.listen(8080)


