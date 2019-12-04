FROM node:6.14.2
EXPOSE 8080

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
ADD . /usr/src/app 
RUN npm run build
CMD [ "npm", "start" ]
