FROM node:13.10.1-alpine3.10

RUN apk add --no-cache curl

WORKDIR /opt/app/
COPY . .
RUN npm install

CMD ["npm", "start", "--silent"]
