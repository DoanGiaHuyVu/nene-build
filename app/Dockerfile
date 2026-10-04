FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=10000
EXPOSE 10000

CMD ["node", "index.js"]
