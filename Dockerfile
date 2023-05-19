FROM node:18
WORKDIR /usr/src/app
COPY Server/package*.json ./
RUN npm install
CMD ["node", "app.js"]

