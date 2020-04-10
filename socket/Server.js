var net = require('net');

var HOST = 'localhost';
var PORT = 9000;
var server = net.createServer();
server.listen(PORT, HOST,function(){

    console.log('Server listening on ' + server.address().address +':'+ server.address().port);
  });



server.on('connection', function(socket) {
  console.log("New Connection is Made")
  console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
  // other stuff is the same from here
  socket.on("data",function(data){

  console.log("Data from %s :%s",socket.remotePort,data)
  socket.write("Hello" +data)
    
  });
  socket.once("close",function(){
    console.log("Connection from %s closed",socket.remotePort)
  });
  socket.on("error",function(){});
});


server.on('error', function(error) {
  console.log('Error : ',error);
  // other stuff is the same from here
});