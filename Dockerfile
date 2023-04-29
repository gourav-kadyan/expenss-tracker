FROM node:12.2.0-alpine
COPY . .
RUN npm install
EXPOSE 800
CMD ["npm","start"]
