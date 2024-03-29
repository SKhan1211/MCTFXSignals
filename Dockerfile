FROM node:16.15.0-alpine as build

WORKDIR /usr/src/node_app

ARG NODE_ENV=production

ENV PATH /usr/src/node_app/node_modules/.bin:$PATH

COPY package.json /usr/src/node_app/package.json

COPY . /usr/src/node_app

RUN yarn install --silent

RUN npm run postinstall

FROM ruby:2.5.1-alpine

RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata

ARG RAILS_ENV=production

WORKDIR /my_app
COPY Gemfile /my_app/Gemfile

RUN gem install bundler && bundle install 
COPY . /my_app

COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]