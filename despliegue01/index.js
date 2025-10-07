require('dotenv').config()
const http = require('http')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    
    // Configurar headers para HTML
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    
    // HTML de la página
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi Aplicación Node.js</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 50px auto;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-align: center;
            }
            .container {
                background: rgba(255,255,255,0.1);
                padding: 40px;
                border-radius: 20px;
                backdrop-filter: blur(10px);
            }
            h1 {
                font-size: 2.5em;
                margin-bottom: 20px;
            }
            .info {
                background: rgba(255,255,255,0.2);
                padding: 20px;
                border-radius: 10px;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 ¡Aplicación Desplegada!</h1>
            <p><strong>¡Bienvenidos al curso de Desarrollo Web Avanzado!</strong></p>
            
            <div class="info">
                <h3>📊 Información del Servidor</h3>
                <p><strong>Puerto:</strong> ${process.env.PORT || 3000}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
                <p><strong>Node.js:</strong> ${process.version}</p>
            </div>
            
            <div class="info">
                <h3>✅ Estado del Proyecto</h3>
                <p>✅ Nodemon configurado</p>
                <p>✅ Variables de entorno (.env)</p>
                <p>✅ Git y GitHub sincronizado</p>
                <p>✅ Desplegado en producción</p>
            </div>
            
            <p style="margin-top: 30px;">
                <em>Proyecto desarrollado por Hugo Moreno del Carpio</em>
            </p>
        </div>
    </body>
    </html>
    `
    
    res.end(html)
}

const server = http.createServer(requestController)

// Puerto para producción (Render) o desarrollo local
const PORT = process.env.PORT || 3000

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})
