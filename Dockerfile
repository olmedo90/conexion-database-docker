FROM node:16.14.0
RUN mkdir -p /class/app
WORKDIR /class/app
COPY . . 
RUN npm install -g 
EXPOSE 3000
CMD ["npm","run", "start"]
