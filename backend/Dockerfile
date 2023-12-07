ARG VERSION=0.0.0
ARG REVISION=HEAD
ARG DATE=today

FROM node:20-alpine as builder

ARG VERSION
ARG REVISION
ARG DATE
ENV VERSION=$VERSION
ENV REVISION=$REVISION
ENV DATE=$DATE

WORKDIR /app
COPY build.mjs build.mjs
COPY buildmeta.json buildmeta.json
RUN node build.mjs

FROM node:20-alpine as runner
ARG VERSION
ARG REVISION
ARG DATE
LABEL org.opencontainers.image.authors=danielr1996
LABEL org.opencontainers.image.url=https://github.com/danielr1996/ci-cd-demo
LABEL org.opencontainers.image.documentation=https://github.com/danielr1996/ci-cd-demo/README.md
LABEL org.opencontainers.image.source=https://github.com/danielr1996/ci-cd-demo/backend
LABEL org.opencontainers.image.vendor=danielr1996
LABEL org.opencontainers.image.title=backend
LABEL org.opencontainers.image.description=backend
LABEL org.opencontainers.image.version=$VERSION
LABEL org.opencontainers.image.revision=$REVISION
LABEL org.opencontainers.image.created=$DATE

WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --chown=node:node index.mjs index.mjs
COPY --from=builder --chown=node:node /app/buildmeta.json buildmeta.json
EXPOSE 8080
CMD ["node","index.mjs"]