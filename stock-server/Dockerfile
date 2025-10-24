FROM node:18-alpine
WORKDIR /app
COPY index.js .
COPY ../shared /app/data
RUN npm init -y && npm install express
CMD ["node", "index.js"]