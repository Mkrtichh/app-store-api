# App Store Documentation

# Installation

Make sure you installed `typescript` and `ts-node` `sequelize-cli` globally

# Database

Note: database is MySql

### Env file set up

create .env file in root folder and past follow variables in

DB_USER=root

DB_PASSWORD=12345678Aa@

DB_HOST=localhost

DB=appstore

DB_DIALECT=mysql

DB_PORT=3306

PORT=3007

Note: Make sure to set your MySql password and username in the `.env`

### Initialization
The script will create the database, run it from root folder you must  specify environment as first argument default is `local`

-`sh ./scripts/create-db.sh local`


### Run development server
-`npm run start:dev`

### Seeders

`sequelize-cli db:seed:all --env local`

The command will fill some dummy data in database


For other commands see documentation: https://db-migrate.readthedocs.io/en/latest/

### Brief steps
-  `env file set up`
- `sh ./scripts/create-db.sh local`
- `npm run start:dev`
- `sequelize-cli db:seed:all --env local`

Happy checking :)
