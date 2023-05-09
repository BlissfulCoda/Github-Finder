# Base image
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app/
RUN npm run build

# Production stage
FROM nginx:1.17.0-alpine
EXPOSE 3000
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist /usr/share/nginx/html