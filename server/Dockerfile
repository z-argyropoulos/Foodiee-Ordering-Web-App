FROM node:16

WORKDIR /usr/src/foodie-server

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT $PORT
ENV DB_URI $DB_URI

EXPOSE ${PORT}
CMD [ "yarn", "start" ]
