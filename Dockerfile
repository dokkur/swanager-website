FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/swanager-website
WORKDIR /usr/src/swanager-website

# Install app dependencies
COPY package.json /usr/src/swanager-website/
RUN npm install

# Bundle app source
COPY . /usr/src/swanager-website
EXPOSE 5000
CMD [ "npm", "start" ]

# Comment
RUN echo "version 0.0.1"