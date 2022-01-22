FROM node:16 as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

ENV REACT_APP_SERVER_API $REACT_APP_SERVER_API

RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html