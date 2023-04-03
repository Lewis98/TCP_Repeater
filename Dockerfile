FROM node:16

WORKDIR F:/Applications/TCP_Repeater

COPY ./ ./

ENV PORT=3000

EXPOSE 3000

CMD ["npm","start"]