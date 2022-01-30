FROM node:16

WORKDIR /usr/src/foodie-service

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT 3000
ENV DB_URI mongodb+srv://foodiee-production:PLZtbLc7YDxyySvc@cluster0.s9blh.mongodb.net/foodieeDB?retryWrites=true&w=majority

EXPOSE 3000
CMD [ "yarn", "start" ]