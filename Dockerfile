FROM nginx:latest

COPY dist/server.js /usr/share/nginx/html

EXPOSE 80 443 	

CMD ["nginx", "-g", "daemon off;"]

USER jenkins