# Set the base image to Ubuntu
FROM ubuntu

# File Author / Email
MAINTAINER Eric Koh <EricKoh.dev@gmail.com>

# Replace repo
COPY sources.list /etc/apt/sources.list

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get -y install python build-essential nodejs

# Provides cached layer for node_modules
COPY package.json /tmp/
RUN cd /tmp && npm install --registry=https://registry.npm.taobao.org

# Define working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY build /usr/src/app/build
COPY server /usr/src/app/server
COPY dataMigration.js /usr/src/app/
COPY server.js /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["node", "server.js"]
