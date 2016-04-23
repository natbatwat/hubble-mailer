FROM iron/node

WORKDIR /app
ADD . /app

ENTRYPOINT ["node", "hubble_mailer_worker.js"]
