FROM node:16.1.0 as base

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

FROM base as test
RUN npm ci
COPY . .
RUN npm run test

FROM base as prod
RUN npm ci --production
COPY . .
CMD ["npm", "run", "dev"]