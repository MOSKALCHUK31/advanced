FROM node:20.17.0

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
