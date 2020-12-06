FROM node
WORKDIR '/app'
COPY packge.json .
RUN npm install
COPY . .
EXPOSE 8089
CMD ["npm start"]