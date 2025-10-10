# 🚀 Proyecto Node.js - Desplegando JS

## 📋 Descripción
Aplicación web básica desarrollada con Node.js que utiliza nodemon para desarrollo y dotenv para variables de entorno. Proyecto creado para el curso de Desarrollo de Aplicaciones Web Avanzado.

## 🛠️ Tecnologías Utilizadas
- **Node.js** - Runtime de JavaScript
- **HTTP** - Servidor web nativo de Node.js
- **Nodemon** - Auto-reload en desarrollo
- **Dotenv** - Manejo de variables de entorno
- **Yarn** - Gestor de paquetes

## 📦 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/Elsindedos322/repositorybackend.git
cd repositorybackend/despliegue01
```

### 2. Instalar dependencias
```bash
yarn install
```

### 3. Configurar variables de entorno
Crear archivo `.env` en la raíz del proyecto:
```
PORT=3000
NODE_ENV=development
```

## 🚀 Ejecución

### Modo Desarrollo (con auto-reload)
```bash
yarn dev
```

### Modo Producción
```bash
yarn start
```

### Scripts Disponibles
```bash
yarn dev      # Ejecutar con nodemon (desarrollo)
yarn start    # Ejecutar con node (producción)
yarn serve    # Alternativa para iniciar servidor
yarn watch    # Nodemon con monitoreo específico
yarn debug    # Ejecutar con inspector de Node.js
```

## 🌐 URLs de Acceso

### Desarrollo Local
- **URL:** http://localhost:3000
- **Health Check:** http://localhost:3000/health (si está configurado)

### Producción (Render)
- **URL:** [Tu URL de Render aquí]

## 📁 Estructura del Proyecto
```
despliegue01/
├── index.js          # Archivo principal de la aplicación
├── package.json      # Configuración del proyecto y dependencias
├── yarn.lock         # Bloqueo de versiones de dependencias
├── .env              # Variables de entorno (no incluido en git)
├── .gitignore        # Archivos a ignorar en git
└── README.md         # Este archivo
```

## 💻 Desarrollo con VS Code

### 1. Abrir el proyecto
```bash
code .
```

### 2. Extensiones recomendadas
- **ES6 String HTML** - Syntax highlighting para HTML en strings
- **Thunder Client** - Para probar APIs
- **GitLens** - Mejor integración con Git

### 3. Ejecutar desde VS Code
1. Abrir terminal integrada: `Ctrl + ñ`
2. Ejecutar: `yarn dev`
3. Abrir navegador en: http://localhost:3000

### 4. Debug en VS Code
1. Ejecutar: `yarn debug`
2. Ir a "Run and Debug" (Ctrl+Shift+D)
3. Configurar debugger para Node.js

## 🔧 Características de la Aplicación

### Vista Principal
- 🎨 **Diseño responsive** con gradientes CSS
- 📊 **Información del servidor** en tiempo real
- ✅ **Estado del proyecto** y dependencias
- 📱 **Compatible con móviles**

### Funcionalidades
- ✅ Servidor HTTP nativo de Node.js
- ✅ Auto-reload con nodemon
- ✅ Variables de entorno con dotenv
- ✅ Logging básico en consola
- ✅ Headers HTTP correctos

## 🚀 Despliegue

### Render (Recomendado)
1. Conectar repositorio de GitHub
2. Configurar:
   - **Root Directory:** `despliegue01`
   - **Build Command:** `yarn install`
   - **Start Command:** `yarn start`
   - **Node Version:** 18+

### Variables de Entorno en Producción
```
PORT=10000  # Render asigna automáticamente
NODE_ENV=production
```

## 🧪 Testing

### Verificar que funciona
1. Ejecutar: `yarn start`
2. Abrir: http://localhost:3000
3. Verificar que aparece la página de bienvenida

### Health Check Manual
```bash
curl http://localhost:3000
```

## 📚 Comandos Git Útiles

### Workflow básico
```bash
git status                    # Ver estado
git add .                     # Agregar cambios
git commit -m "mensaje"       # Hacer commit
git push github master        # Subir a GitHub
```

### Verificar historial
```bash
git log --oneline            # Ver commits
git remote -v                # Ver repositorios remotos
```

## 🐛 Troubleshooting

### Problemas Comunes

#### Puerto en uso
```bash
# Cambiar puerto en .env
PORT=3001
```

#### Módulos no encontrados
```bash
rm -rf node_modules
yarn install
```

#### Nodemon no funciona
```bash
yarn global add nodemon
# o usar npx
npx nodemon index.js
```

#### Problemas con Render
- Verificar que `Root Directory` esté en `despliegue01`
- Revisar que `dotenv` esté en `dependencies` (no `devDependencies`)
- Verificar logs en Render dashboard

## 👨‍💻 Autor
**Hugo Moreno del Carpio**
- Email: hugomoreno@tecsup.edu.pe
- GitHub: [@Elsindedos322](https://github.com/Elsindedos322)

## 📄 Licencia
MIT License - ver archivo LICENSE para más detalles.

---

## 🎯 Próximos Pasos
- [ ] Agregar Express.js para mejor routing
- [ ] Implementar base de datos
- [ ] Agregar tests unitarios
- [ ] Configurar CI/CD con GitHub Actions
- [ ] Implementar logging avanzado

---

**¡Gracias por usar este proyecto! 🚀**