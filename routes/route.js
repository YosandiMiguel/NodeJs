

const requestHandler = function(req,res)
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
      
          <h1>Hello World 2</h1>
      
        </body>
        </html>
        
        `);//Escribiendo una respuesta

     // console.log(req);
     res.end();//Enviando la respuesta
 }else if(url == "/message" && method == "GET")      //----------------------En caso de que sea una URL diferente
  {
    res.setHeader("Content-Type","text/html");
    res.statusCode = 200;
    res.write//--------------------------------------------Usando el metodo Post,         Usar action + url para enviar la inf a una direccion determinada
    (`
      
      <html>
        <head>
          <title>Message</title>
        </head>
  
        <body>
          <h1>Mensaje</h1><br>

          <form action= "/message" method ="POST">

            <label for ="title">Title:</label>
            <input type = "text" id ="title" name= "Title" />
            <button type="submit" > Send </button>

          </form>
        </body>
      
      </html>
  
    `);
 
    res.end();
  }else if(url == "/message" && method === "POST")
  {

    const body = [];  //Creando un body para tener los elementos enviados por post

    req.on("data", function(chunk)
    {
      body.push(chunk); // adding la informacion al body
    });

    req.on("end", function()
    {
      const bodyConcat = Buffer.concat(body).toString(); //combirtiendo el body a algo legible
      const title = bodyConcat.split("=")[1]; //Obteniendo lo que el usuario digito
      console.log(title);
    });
  
   res.end();
  }
    
}
module.exports = requestHandler;