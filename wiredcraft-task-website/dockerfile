FROM node as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]