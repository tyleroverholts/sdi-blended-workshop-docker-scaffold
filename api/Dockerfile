FROM node:alpine

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install

CMD npm start | npx knex migrate:latest | npx knex seed:run
