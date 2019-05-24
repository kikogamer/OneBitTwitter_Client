FROM node:11.0.0
ENV INSTALL_PATH /onebittwitter_client
RUN yarn global add create-react-app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN yarn install
CMD ["yarn", "start"]