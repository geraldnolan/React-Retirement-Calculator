# specify the node base image with your desired version node:<version>
FROM node:10-alpine
WORKDIR /home/node/app

# Install app dependencies
COPY package.json //home/node/app

#install git for some NPM Modules and remove
RUN apk add --no-cache git && \
    npm install && \
    apk del git
    
# Bundle app source
COPY . /home/node/app
RUN npm run build

# replace this with your application's default port
EXPOSE 3000
CMD [ "npm", "start" ]