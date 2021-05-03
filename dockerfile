FROM node:latest 
RUN addgroup app adduser -S -G app app
USER app
WORKDIR /app
COPY package*json .
RUN npm install
COPY . .
ENV API_URL=http://localhost
EXPOSE 3000
CMD ["npm" ,"start"]
#BU  -f docker-compose