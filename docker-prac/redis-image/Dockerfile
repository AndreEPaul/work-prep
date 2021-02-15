# Use an existing docker image as base
FROM alpine

# Download/install dependency
RUN apk add --update redis

# Tell image what to do on start
CMD ["redis-server"]