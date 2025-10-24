FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm init -y && npm install axios
CMD ["node", "client-A.js"]