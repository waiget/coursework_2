# FROM nginx:latest

# COPY dist/server.js /usr/share/nginx/html

# EXPOSE 80 443 	

# CMD ["nginx", "-g", "daemon off;"]

# USER jenkins

FROM node:6.14.2
EXPOSE 8080
COPY dist/server.js .
CMD node dist/server.js
