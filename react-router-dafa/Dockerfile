# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-router-dom -g --silent

# add app
COPY . ./

# for openshift
RUN chgrp -R 0 /app && \
    chmod -R g+rwX /app

# start app
CMD ["npm", "start"]
