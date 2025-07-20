FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV NODE_OPTIONS="--max-old-space-size=4096"

# RUN npm run build

# CMD [ "npm","start" ]
CMD ["sh", "-c", "sleep 5 && npm run dev"]

