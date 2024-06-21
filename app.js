/*const fs = require("fs"); //Como importar librerias

fs.writeFile("hola.txt","Hola munndo",function()
{
        console.log("Hello world");
});*/

//-------------------------------------------------------
        //Como crear un servidor Web

const http = require("http");

  //Creando el servidor
const server = http.createServer(function(req,res)
{
  const url = req.url;
  const method = req.method;


 if(url == "/")
 { 
        
    res.setHeader("Content-Type","text/html"); //Diciendole al servidor que voy a devolver un HTML
    
    res.write(`
        
        <html>
        <head>
          <title>Node Page</title>
        </head>

        <body>
      
          <h1>Hello World</h1>
      
        </body>
        </html>
        
        `);//Escribiendo una respuesta

      console.log(req);
     res.end();//Enviando la respuesta
 }else if(url == "/message" && method == "GET")      //----------------------En caso de que sea una URL diferente
  {
    res.setHeader("Content-Type","text/html");

    res.write//--------------------------------------------Usando el metodo Post
    (`
      
      <html>
        <head>
          <title>Message</title>
        </head>
  
        <body>
  
          <h1>Mensaje</h1>
          <form method ="POST">
            <label for ="mensaje">Escribe un mensaje</label>
            <input type = "text" id ="mensaje">
            <button type="submit">Enviar</button>
          </form>
        </body>
      
      </html>
  
    `);
 
    res.end();
  }else if(url === "/message" && method === "POST")
  {
    res.setHeader("Content-Type","text/html");

    res.write//--------------------------------------------Usando el metodo Post
    (`
      
      <html>
        <head>
          <title>Message</title>
        </head>
  
        <body>
          <a href ="/message">Volver al mensaje con get</a>
        </body>
      
      </html>
  
    `);
  
    res.end();
  }
    
}); 



//Definiendo el puerto por el cual se va a escuchar
server.listen(3000);