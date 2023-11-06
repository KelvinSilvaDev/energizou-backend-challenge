# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command
4. Run `docker-compose up` to start the database and the phpmyadmin
5. Run `npm run typeorm -- -d ./src/database/data-source.ts migration:run` to setup the database with the migrations
