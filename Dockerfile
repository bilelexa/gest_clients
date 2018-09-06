# base image
FROM node:alpine
# set working directory
RUN mkdir /app
WORKDIR /app
# add app
ADD . /app
# install dependencies
RUN npm install
# expose port
EXPOSE 3000
# start app
ENTRYPOINT npm start