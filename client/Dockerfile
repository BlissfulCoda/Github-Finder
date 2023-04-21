FROM node:19-alpine as development

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.17.0-alpine as production

EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# FROM nginx:alpine as production

COPY --from=development /usr/src/app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
