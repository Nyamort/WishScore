FROM node:20-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install && npm install -g expo-cli

CMD [ "npm", "start" ]



