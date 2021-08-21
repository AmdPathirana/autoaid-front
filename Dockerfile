FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
# COPY package.json .
RUN npm install --force
EXPOSE 3000
CMD [ "npm", "start" ]