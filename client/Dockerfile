FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN yarn --legacy-peer-deps

COPY . .

ENV PORT 5000
ENV REACT_APP_SERVER_API https://foodiee-service.herokuapp.com/api/
ENV REACT_APP_CLOUDINARY_CLOUD_NAME doy1tqcqe

RUN yarn build

# -------------------------------------------------- #

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'