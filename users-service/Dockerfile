FROM node:8

# Создать директорию app
WORKDIR /app

# Используется символ подстановки для копирования как package.json, так и package-lock.json
COPY package*.json ./

RUN npm install

# Скопировать исходники приложения
COPY src /app

# Port
EXPOSE 3000

# Запуск проекта
CMD ["node", "server.js"]