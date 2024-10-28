# Usamos una imagen base de Node.js
FROM node:14

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de configuración
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de la aplicación
COPY ./src .

# Exponemos el puerto en el que la aplicación escuchará
EXPOSE 3002

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
