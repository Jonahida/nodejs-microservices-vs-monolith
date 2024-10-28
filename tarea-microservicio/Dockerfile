# Dockerfile para el Servicio de Creación de Tareas
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 3002

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
