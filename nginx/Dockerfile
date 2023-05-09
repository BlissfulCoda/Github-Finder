FROM nginx

RUN rm /usr/share/nginx/html/*

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
