FROM node

COPY . app

WORKDIR app

RUN npm i

EXPOSE 3001

ENV TAX_SERVICE_URL http://localhost:3000

CMD npm run start