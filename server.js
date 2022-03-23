const http = require("http");
var fs = require("fs");

const server = http.createServer((req,res) =>{
if(req.url = "/"){
    fs.readFile( "./user.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
     });
    // res.end("hello world");
}
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("server is listening on port 8000");
})