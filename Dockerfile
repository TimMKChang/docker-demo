FROM node:12-alpine
COPY app.js package.json /app/
WORKDIR /app
RUN npm install && npm cache clean --force
CMD node app.js