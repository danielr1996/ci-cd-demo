FROM node:20-alpine
LABEL org.opencontainers.image.authors=danielr1996
LABEL org.opencontainers.image.url=https://github.com/danielr1996/ci-cd-demo
LABEL org.opencontainers.image.documentation=https://github.com/danielr1996/ci-cd-demo/README.md
LABEL org.opencontainers.image.source=https://github.com/danielr1996/ci-cd-demo/frontend
LABEL org.opencontainers.image.vendor=danielr1996
LABEL org.opencontainers.image.title=frontend
LABEL org.opencontainers.image.description=frontend

WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --chown=node:node index.mjs index.mjs
COPY --chown=node:node static/index.html static/index.html
EXPOSE 3000
CMD ["node","index.mjs"]