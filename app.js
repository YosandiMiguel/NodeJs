/*const fs = require("fs"); //Como importar librerias

fs.writeFile("hola.txt","Hola munndo",function()
{
        console.log("Hello world");
});*/

//-------------------------------------------------------
        //Como crear un servidor Web

const http = require("http");
const route = require("./routes/route");

  //Creando el servidor
const server = http.createServer(route); 



//Definiendo el puerto por el cual se va a escuchar
server.listen(3000);