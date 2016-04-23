FROM iron/node

WORKDIR /app
ADD . /app

ENTRYPOINT ["node", "hubble-mailer.js"]
